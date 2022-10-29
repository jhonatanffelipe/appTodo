import { inject, injectable } from 'tsyringe';
import { IUserResponseDTO } from '../../dtos/IUserResponseDTO';
import { toDTO } from '../../mapper/UserMap';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class ListAllUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(): Promise<IUserResponseDTO[]> {
    const users = await this.usersRepository.findAll();

    const usersFormated = users.map(user => {
      return toDTO(user);
    });

    return usersFormated;
  }
}

export { ListAllUsersUseCase };
