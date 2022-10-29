import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import auth from '../../../../config/auth';
import { UsersTokensRepository } from '../../../../modules/accounts/infra/typeorm/repositories/UsersTokensRepository';
import { AppError } from '../../../errors/AppError';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  const usersTokensRepository = new UsersTokensRepository();

  if (!authHeader) {
    throw new AppError('Token é obrigatório!', 401);
  }

  const [, access_token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(access_token, auth.secret_access_token) as IPayload;

    const user = await usersTokensRepository.findByUserIdAndAccessToken(user_id, access_token);

    if (!user) {
      throw new AppError('Token inválido!', 401);
    }

    request.user = {
      id: user_id,
    };
    next();
  } catch {
    throw new AppError('Token inválido!', 401);
  }
}
