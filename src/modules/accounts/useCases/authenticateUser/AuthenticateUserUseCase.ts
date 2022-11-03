import { compare } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import auth from '@config/auth';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import { AppError } from '@shared/errors/AppError';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository';

const {
  secretAccessToken,
  expiresInAccessToken,
  expiresAccessTokenHours,
  secretRefreshToken,
  expiresInRefreshToken,
  expiresRefreshTokenDays,
} = auth;
interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  accessToken: string;
  refreshToken: string;
  iat: number;
  exp: number;
}

interface IPayload {
  iat: number;
  exp: number;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,
    @inject('DateProvider')
    private dateProvider: IDateProvider,
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or password incorrect!', 400);
    }

    const userId = user.id ? user.id : '';

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect!', 400);
    }

    const dateNow = this.dateProvider.dateNow();

    const expiredTokens = await this.usersTokensRepository.findByUserId(userId);

    for await (const userToken of expiredTokens) {
      if (userToken.refreshTokenExpiresDate <= dateNow) {
        await this.usersTokensRepository.deleteById(userToken.id);
      }
    }

    const accessToken = sign({ email }, secretAccessToken, {
      subject: user.id,
      expiresIn: expiresInAccessToken,
    });

    const { iat, exp } = verify(accessToken, secretAccessToken) as IPayload;

    const accessTokenExpiresDate = this.dateProvider.addHours(expiresAccessTokenHours);

    const refreshTokenExpiresDate = this.dateProvider.addDay(expiresRefreshTokenDays);

    const refreshToken = sign({ email }, secretRefreshToken, {
      subject: user.id,
      expiresIn: expiresInRefreshToken,
    });

    await this.usersTokensRepository.create({
      userId,
      accessToken,
      accessTokenExpiresDate,
      refreshToken,
      refreshTokenExpiresDate,
    });

    const tokenReturn: IResponse = {
      user: {
        name: user.name,
        email: user.email,
      },
      accessToken,
      refreshToken,
      iat,
      exp,
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
