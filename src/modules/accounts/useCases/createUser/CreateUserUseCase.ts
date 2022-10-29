import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';

import { AppError } from './../../../../shared/errors/AppError';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({ name, email, password, confirmPassword }: ICreateUserDTO): Promise<void> {
    const userAlreadExists = await this.usersRepository.findByEmail(email);

    if (userAlreadExists) {
      throw new AppError('Usuário já existe!', 400);
    }

    if (password !== confirmPassword) {
      throw new AppError('Senhas não são iguais, tente novamente!', 400);
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({
      name,
      email,
      password: passwordHash,
    });
  }
}

export { CreateUserUseCase };
