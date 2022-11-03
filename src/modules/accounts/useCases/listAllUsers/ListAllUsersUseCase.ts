import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IUserResponseDTO } from '@modules/accounts/dtos/IUserResponseDTO';
import { toUserDTO } from '@modules/accounts/mapper/UserMap';

@injectable()
class ListAllUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(): Promise<IUserResponseDTO[]> {
    const users = await this.usersRepository.findAll();

    const usersFormated = users.map(user => {
      return toUserDTO(user);
    });

    return usersFormated;
  }
}

export { ListAllUsersUseCase };
