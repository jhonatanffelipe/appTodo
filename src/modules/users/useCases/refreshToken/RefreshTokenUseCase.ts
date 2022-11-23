import { sign, verify } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import auth from '@config/auth';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import { IUsersTokensRepository } from '@modules/users/repositories/IUsersTokensRepository';
import { AppError } from '@shared/errors/AppError';

const {
  secretAccessToken,
  secretRefreshToken,
  expiresInAccessToken,
  expiresAccessTokenHours,
  expiresRefreshTokenDays,
} = auth;
interface IPayload {
  sub: string;
  email: string;
}

interface IResponse {
  accessToken: string;
  refreshToken: string;
}
@injectable()
class RefreshTokenUseCase {
  constructor(
    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,
    @inject('DateProvider')
    private dateProvider: IDateProvider,
  ) {}

  async execute(refreshToken: string): Promise<IResponse> {
    const payload = { sub: '', email: '' };

    try {
      const { sub, email } = verify(refreshToken, secretRefreshToken) as IPayload;

      payload.sub = sub;
      payload.email = email;
    } catch (_) {
      throw new AppError('Refresh token does not exists!');
    }

    const { sub, email } = payload;

    const userId = payload.sub;

    const userToken = await this.usersTokensRepository.findByUserIdAndRefreshToken(userId, refreshToken);

    if (!userToken) {
      throw new AppError('Refresh token does not exists!');
    }

    await this.usersTokensRepository.deleteById(userToken.id);

    const accessToken = sign({ email }, secretAccessToken, {
      subject: sub,
      expiresIn: expiresInAccessToken,
    });

    const accessTokenExpiresDate = this.dateProvider.addHours(expiresAccessTokenHours);
    const refreshTokenExpiresDate = this.dateProvider.addDay(expiresRefreshTokenDays);

    await this.usersTokensRepository.create({
      userId,
      accessToken,
      accessTokenExpiresDate,
      refreshToken,
      refreshTokenExpiresDate,
    });

    return {
      accessToken,
      refreshToken,
    };
  }
}

export { RefreshTokenUseCase };
