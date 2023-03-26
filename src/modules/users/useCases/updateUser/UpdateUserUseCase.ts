import { IUsersTokensRepository } from '@modules/users/repositories/IUsersTokensRepository';
import { inject, injectable } from 'tsyringe';
import IUpdateUserDTO from '@modules/users/dtos/IUpdateUserDTO';
import { AppError } from '@shared/errors/AppError';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { compare, hash } from 'bcryptjs';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,
    @inject('DateProvider')
    private dateProvider: IDateProvider,
  ) {}

  public async execute({ id, name, email, currentPassword, password, confirmPassword }: IUpdateUserDTO): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('Usuário não encontrado.');
    }

    user.name = name;

    const emailAlreadExists = await this.usersRepository.findByEmail(email);

    if (emailAlreadExists && emailAlreadExists.id !== id) {
      throw new AppError('Já existe uma conta utilizando este e-mail.');
    }

    user.email = email;

    if ((currentPassword || password || confirmPassword) && user.id) {
      const passwordMatch = await compare(currentPassword, user.password);

      if (!passwordMatch) {
        throw new AppError('Senha atual incorreta!');
      }

      const validate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z$*&@#]{6,}$/;

      if (!validate.test(password)) {
        throw new AppError(
          `Nova senha incorreta! Deve conter no mínimo 6 caracteres, ao menos um dígito, ao menos uma letra minúscula e ao menos letra maiúscula`,
          400,
        );
      }

      const passwordHash = await hash(password, 8);

      user.password = passwordHash;

      const dateNow = this.dateProvider.dateNow();

      const expiredTokens = await this.usersTokensRepository.findByUserId(user.id);

      for await (const userToken of expiredTokens) {
        if (userToken.accessTokenExpiresDate <= dateNow) {
          await this.usersTokensRepository.deleteById(userToken.id);
        }
      }
    }

    await this.usersRepository.update(user);

    return;
  }
}

export { UpdateUserUseCase };
