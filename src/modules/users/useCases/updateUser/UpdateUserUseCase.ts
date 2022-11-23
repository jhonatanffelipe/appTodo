import { inject, injectable } from 'tsyringe';
import IUpdateUserDTO from '@modules/users/dtos/IUpdateUserDTO';
import { AppError } from '@shared/errors/AppError';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';

@injectable()
class UpdateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({ id, name }: IUpdateUserDTO): Promise<void> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('Usuário não encontrado.');
    }

    Object.assign(user, { name });

    await this.usersRepository.update(user);

    return;
  }
}

export { UpdateUserUseCase };
