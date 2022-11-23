import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { IUserResponseDTO } from '@modules/users/dtos/IUserResponseDTO';
import { toUserDTO } from '@modules/users/mapper/UserMap';

@injectable()
class ShowProfileUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(id: string): Promise<IUserResponseDTO> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('Token inválido!', 401);
    }

    return toUserDTO(user);
  }
}

export { ShowProfileUseCase };
