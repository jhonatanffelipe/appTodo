import { ICreateUserTokenDTO } from '../dtos/ICreateUserTokenDTO';
import { UserTokens } from '../infra/typeorm/entities/UserToken';

interface IUsersTokensRepository {
  create({ userId, accessToken, accessTokenExpiresDate }: ICreateUserTokenDTO): Promise<UserTokens | null>;
  findByUserId(userId: string): Promise<UserTokens[]>;
  findByAccessToken(accessToken: string): Promise<UserTokens | null>;
  findByUserIdAndAccessToken(userId: string, accessToken: string): Promise<UserTokens | null>;
  deleteById(id: string): Promise<void>;
  deleteByUserId(userId: string): Promise<void>;
}

export { IUsersTokensRepository };
