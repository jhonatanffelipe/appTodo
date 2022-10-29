import { ICreateUserTokenDTO } from '../dtos/ICreateUserTokenDTO';
import { UserTokens } from '../infra/typeorm/entities/UserTokens';

interface IUsersTokensRepository {
  create({
    user_id,
    access_token,
    refresh_token,
    access_token_expires_date,
    refresh_token_expires_date,
  }: ICreateUserTokenDTO): Promise<UserTokens | null>;
  findByUserId(user_id: string): Promise<UserTokens[]>;
  findByAccessToken(access_token: string): Promise<UserTokens | null>;
  findByUserIdAndAccessToken(user_id: string, access_token: string): Promise<UserTokens | null>;
  findByUserIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UserTokens | null>;
  deleteById(id: string): Promise<void>;
  deleteByUserId(user_id: string): Promise<void>;
}

export { IUsersTokensRepository };
