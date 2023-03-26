import { compare } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import auth from '@config/auth';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import { AppError } from '@shared/errors/AppError';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/users/repositories/IUsersTokensRepository';

const { secretAccessToken, expiresInAccessToken, expiresAccessTokenHours } = auth;
interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  };
  token: {
    accessToken: string;
    iat: number;
    exp: number;
  };
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
      throw new AppError('Credênciais incorretas!', 400);
    }

    const userId = user.id ? user.id : '';

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Credênciais incorretas!', 400);
    }

    const dateNow = this.dateProvider.dateNow();

    const expiredTokens = await this.usersTokensRepository.findByUserId(userId);

    for await (const userToken of expiredTokens) {
      if (userToken.accessTokenExpiresDate <= dateNow) {
        await this.usersTokensRepository.deleteById(userToken.id);
      }
    }

    const accessToken = sign({ email }, secretAccessToken, {
      subject: user.id,
      expiresIn: expiresInAccessToken,
    });

    const { iat, exp } = verify(accessToken, secretAccessToken) as IPayload;

    const accessTokenExpiresDate = this.dateProvider.addHours(expiresAccessTokenHours);

    await this.usersTokensRepository.create({
      userId,
      accessToken,
      accessTokenExpiresDate,
    });

    const tokenReturn: IResponse = {
      user: {
        id: userId,
        name: user.name,
        email: user.email,
        avatarUrl: user.avatar ? `${process.env.APP_API_URL}:${process.env.PORT}/avatar/${user.avatar}` : '',
      },
      token: {
        accessToken,
        iat,
        exp,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
