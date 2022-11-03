import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import auth from '@config/auth';
import { UsersTokensRepository } from '@modules/accounts/infra/typeorm/repositories/UsersTokensRepository';
import { AppError } from '@shared/errors/AppError';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  const usersTokensRepository = new UsersTokensRepository();

  if (!authHeader) {
    throw new AppError('Token é obrigatório!', 401);
  }

  const [, accessToken] = authHeader.split(' ');

  try {
    const { sub: userId } = verify(accessToken, auth.secretAccessToken) as IPayload;

    const user = await usersTokensRepository.findByUserIdAndAccessToken(userId, accessToken);

    if (!user) {
      throw new AppError('Token inválido!', 401);
    }

    request.user = {
      id: userId,
    };
    next();
  } catch {
    throw new AppError('Token inválido!', 401);
  }
}
