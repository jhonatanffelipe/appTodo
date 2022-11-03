import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import IUpdateUserAvatarDTO from '@modules/accounts/dtos/IUpdateUserAvatarDTO';
import { IStorageProvider } from '@shared/container/providers/StorageProvider/IStorageProvider';

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ userId, avatarFile }: IUpdateUserAvatarDTO) {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new AppError('Usuário não encontrado!');
    }

    if (user.avatar) {
      await this.storageProvider.delete(user.avatar, 'avatar');
    }

    await this.storageProvider.save(avatarFile, 'avatar');

    if (!user) {
      throw new AppError('Usuário não encontrado!', 400);
    }

    user.avatar = avatarFile;

    await this.usersRepository.update(user);

    return;
  }
}

export { UpdateUserAvatarUseCase };
