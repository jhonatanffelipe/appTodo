import { IUpdatePasswordDTO } from '@modules/users/dtos/IUpdatePasswordDTO';
import { IResetPasswordTokensRepository } from '@modules/users/repositories/IResetPasswordTokensRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/users/repositories/IUsersTokensRepository';
import { IHashProvider } from '@shared/container/providers/HashProvider/IHashProvider';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class UpdatePasswordUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
    @inject('ResetPasswordTokensRepository')
    private resetPasswordTokensRepository: IResetPasswordTokensRepository,
    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,
  ) {}

  public async execute({ userId, currentPassword, password, confirmPassword }: IUpdatePasswordDTO): Promise<void> {
    if (password !== confirmPassword) {
      throw new AppError(
        'Nova senha informada não é iguail a confirmação, por favor verifique e tente novamente.',
        400,
      );
    }

    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new AppError('Usuário não existe na base.', 400);
    }

    const passwordMatch = await this.hashProvider.comparePasswords(currentPassword, user.password);

    if (!passwordMatch) {
      throw new AppError('Senha atual informada incorretamente.');
    }

    const passwordHashed = await this.hashProvider.hashPassword(password);

    user.password = passwordHashed;

    await this.usersRepository.update(user);

    await this.resetPasswordTokensRepository.deleteByUserId(String(user.id));
    await this.usersTokensRepository.deleteByUserId(String(user.id));

    return;
  }
}

export { UpdatePasswordUseCase };
