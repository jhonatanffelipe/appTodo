import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IUserResponseDTO } from '@modules/accounts/dtos/IUserResponseDTO';
import { toUserDTO } from '@modules/accounts/mapper/UserMap';

@injectable()
class ShowProfileUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(id: string): Promise<IUserResponseDTO> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new AppError('Usuário não encontrado!');
    }

    return toUserDTO(user);
  }
}

export { ShowProfileUseCase };
