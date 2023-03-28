import path from 'path';
import { IResetPasswordTokensRepository } from '@modules/users/repositories/IResetPasswordTokensRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { IMailProvider } from '@shared/container/providers/MailProvider/models/IMailProvider';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  email: string;
}

@injectable()
class ForgotPasswordUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('MailProvider')
    private mailProvider: IMailProvider,
    @inject('ResetPasswordTokensRepository')
    private resetPasswordTokensRepository: IResetPasswordTokensRepository,
  ) {}

  public async execute({ email }: IRequest): Promise<void> {
    const user = await this.usersRepository.findByEmail(email.toLowerCase());

    if (!user) {
      throw new AppError('Usuário não encontrado.');
    }

    const { token } = await this.resetPasswordTokensRepository.generateToken(String(user.id));

    const forgotPasswordTemplate = path.resolve(__dirname, '..', '..', 'views', 'forgotPassword.hbs');

    await this.mailProvider.sendMail({
      to: {
        name: user.name,
        email: user.email,
      },
      subject: '[My Todo] Recuperação de senha',
      templateData: {
        file: forgotPasswordTemplate,
        variables: {
          name: user.name,
          link: `${process.env.APP_FRONTEND_URL}/reset_password?token=${token}`,
        },
      },
    });
    return;
  }
}

export { ForgotPasswordUseCase };
