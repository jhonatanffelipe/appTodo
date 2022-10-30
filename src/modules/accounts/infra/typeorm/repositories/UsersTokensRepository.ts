import { getRepository, Repository } from 'typeorm';

import { ICreateUserTokenDTO } from '../../../dtos/ICreateUserTokenDTO';
import { IUsersTokensRepository } from '../../../repositories/IUsersTokensRepository';
import { UserTokens } from '../entities/UserToken';

class UsersTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UserTokens>;

  constructor() {
    this.repository = getRepository(UserTokens);
  }

  async create({
    user_id,
    access_token,
    access_token_expires_date,
    refresh_token,
    refresh_token_expires_date,
  }: ICreateUserTokenDTO): Promise<UserTokens | null> {
    const userToken = this.repository.create({
      user_id,
      access_token,
      refresh_token,
      access_token_expires_date,
      refresh_token_expires_date,
    });

    await this.repository.save(userToken);

    return userToken ? userToken : null;
  }

  async findByUserId(user_id: string): Promise<UserTokens[]> {
    const usersTokens = await this.repository.find({
      user_id,
    });
    return usersTokens;
  }

  async findByAccessToken(access_token: string): Promise<UserTokens | null> {
    const userToken = await this.repository.findOne({
      access_token,
    });
    return userToken ? userToken : null;
  }

  async findByUserIdAndAccessToken(user_id: string, access_token: string): Promise<UserTokens | null> {
    const userToken = await this.repository.findOne({
      user_id,
      access_token,
    });
    return userToken ? userToken : null;
  }

  async findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UserTokens | null> {
    const userToken = await this.repository.findOne({
      user_id,
      refresh_token,
    });
    return userToken ? userToken : null;
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async deleteByUserId(user_id: string): Promise<void> {
    await this.repository.delete({ user_id });
  }
}

export { UsersTokensRepository };
