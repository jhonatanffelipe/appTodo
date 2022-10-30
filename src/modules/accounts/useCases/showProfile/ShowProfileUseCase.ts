import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../../shared/errors/AppError';
import { IUserResponseDTO } from '../../dtos/IUserResponseDTO';
import { toDTO } from '../../mapper/UserMap';
import { IUsersRepository } from '../../repositories/IUsersRepository';

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

    return toDTO(user);
  }
}

export { ShowProfileUseCase };
