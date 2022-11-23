import { IUpdatePasswordDTO } from '@modules/users/dtos/IUpdatePasswordDTO';
import { ResetPasswordTokensRepository } from '@modules/users/infra/typeorm/repositories/ResetPasswordTokensRepository';
import { UsersTokensRepository } from '@modules/users/infra/typeorm/repositories/UsersTokensRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { IHashProvider } from '@shared/container/providers/HashProvider/IHashProvider';
import { AppError } from '@shared/errors/AppError';

class UpdatePasswordUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private hashProvider: IHashProvider,
    private resetPasswordTokensRepository: ResetPasswordTokensRepository,
    private usersTokensRepository: UsersTokensRepository,
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
