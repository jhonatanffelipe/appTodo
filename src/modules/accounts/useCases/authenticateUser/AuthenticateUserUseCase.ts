import { compare } from 'bcryptjs';
import { sign, verify } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import auth from '../../../../config/auth';
import { IDateProvider } from '../../../../shared/container/providers/DateProvider/IDateProvider';
import { AppError } from '../../../../shared/errors/AppError';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import { IUsersTokensRepository } from '../../repositories/IUsersTokensRepository';

const {
  secret_access_token,
  expires_in_access_token,
  expires_access_token_hours,
  secret_refresh_token,
  expires_in_refresh_token,
  expires_refresh_token_days,
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
  access_token: string;
  refresh_token: string;
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

    const user_id = user.id ? user.id : '';

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Email or password incorrect!', 400);
    }

    const dateNow = this.dateProvider.dateNow();

    const expiredTokens = await this.usersTokensRepository.findByUserId(user_id);

    for await (const userToken of expiredTokens) {
      if (userToken.refresh_token_expires_date <= dateNow) {
        await this.usersTokensRepository.deleteById(userToken.id);
      }
    }

    const access_token = sign({ email }, secret_access_token, {
      subject: user.id,
      expiresIn: expires_in_access_token,
    });

    const { iat, exp } = verify(access_token, secret_access_token) as IPayload;

    const access_token_expires_date = this.dateProvider.addHours(expires_access_token_hours);

    const refresh_token_expires_date = this.dateProvider.addDay(expires_refresh_token_days);

    const refresh_token = sign({ email }, secret_refresh_token, {
      subject: user.id,
      expiresIn: expires_in_refresh_token,
    });

    await this.usersTokensRepository.create({
      user_id,
      access_token,
      access_token_expires_date,
      refresh_token,
      refresh_token_expires_date,
    });

    const tokenReturn: IResponse = {
      user: {
        name: user.name,
        email: user.email,
      },
      access_token,
      refresh_token,
      iat,
      exp,
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
