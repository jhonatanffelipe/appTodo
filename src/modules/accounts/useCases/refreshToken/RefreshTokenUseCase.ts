import { sign, verify } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import auth from '../../../../config/auth';
import { IDateProvider } from '../../../../shared/container/providers/DateProvider/IDateProvider';
import { AppError } from '../../../../shared/errors/AppError';
import { IUsersTokensRepository } from '../../repositories/IUsersTokensRepository';

const {
  secret_access_token,
  secret_refresh_token,
  expires_in_access_token,
  expires_access_token_hours,
  expires_refresh_token_days,
} = auth;
interface IPayload {
  sub: string;
  email: string;
}

interface IResponse {
  access_token: string;
  refresh_token: string;
}
@injectable()
class RefreshTokenUseCase {
  constructor(
    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,
    @inject('DateProvider')
    private dateProvider: IDateProvider,
  ) {}

  async execute(refresh_token: string): Promise<IResponse> {
    const payload = { sub: '', email: '' };

    try {
      const { sub, email } = verify(refresh_token, secret_refresh_token) as IPayload;

      payload.sub = sub;
      payload.email = email;
    } catch (_) {
      throw new AppError('Refresh token does not exists!');
    }

    const { sub, email } = payload;

    const user_id = payload.sub;

    const userToken = await this.usersTokensRepository.findByUserIdAndRefreshToken(user_id, refresh_token);

    if (!userToken) {
      throw new AppError('Refresh token does not exists!');
    }

    await this.usersTokensRepository.deleteById(userToken.id);

    const access_token = sign({ email }, secret_access_token, {
      subject: sub,
      expiresIn: expires_in_access_token,
    });

    const access_token_expires_date = this.dateProvider.addHours(expires_access_token_hours);
    const refresh_token_expires_date = this.dateProvider.addDay(expires_refresh_token_days);

    await this.usersTokensRepository.create({
      user_id,
      access_token,
      access_token_expires_date,
      refresh_token,
      refresh_token_expires_date,
    });

    return {
      access_token,
      refresh_token,
    };
  }
}

export { RefreshTokenUseCase };
