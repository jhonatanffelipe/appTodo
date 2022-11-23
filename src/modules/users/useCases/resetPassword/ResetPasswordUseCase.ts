import { IResetPasswordTokensRepository } from '@modules/users/repositories/IResetPasswordTokensRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/users/repositories/IUsersTokensRepository';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import { IHashProvider } from '@shared/container/providers/HashProvider/IHashProvider';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  token: string;
  password: string;
  confirmPassword: string;
}

@injectable()
class ResetPasswordUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('ResetPasswordTokensRepository')
    private resetPasswordTokensRepository: IResetPasswordTokensRepository,
    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,
    @inject('HashProvider')
    private hashProvider: IHashProvider,
    @inject('DateProvider')
    private dateProvider: IDateProvider,
  ) {}

  public async execute({ token, password, confirmPassword }: IRequest): Promise<void> {
    const resetPasswordToken = await this.resetPasswordTokensRepository.findByToken(token);

    if (!resetPasswordToken) {
      throw new AppError('O link para alterar a senha é inválido.', 400);
    }

    const generatedTo = this.dateProvider.compareInHours(new Date(), resetPasswordToken?.createdAt);

    if (generatedTo > 2) {
      throw new AppError('O link para alterar a senha expirou.', 400);
    }

    if (password !== confirmPassword) {
      throw new AppError(
        'Nova senha informada não é iguail a confirmação, por favor verifique e tente novamente.',
        400,
      );
    }

    const user = await this.usersRepository.findById(String(resetPasswordToken.user?.id));

    if (!user) {
      throw new AppError('Usuário não encontrado.', 400);
    }

    const passwordHashed = await this.hashProvider.hashPassword(password);

    user.password = passwordHashed;

    await this.usersRepository.update(user);

    await this.resetPasswordTokensRepository.deleteByUserId(String(user.id));
    await this.usersTokensRepository.deleteByUserId(String(user.id));

    return;
  }
}

export { ResetPasswordUseCase };
