import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { RefreshTokenUseCase } from './RefreshTokenUseCase';

class RefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const refresh_token =
      request.body.refresh_token || request.headers['x-refresh_token'] || request.query.refresh_token;

    const refreshTokenUseCase = container.resolve(RefreshTokenUseCase);

    const refresh_token_new = await refreshTokenUseCase.execute(refresh_token);

    return response.json(refresh_token_new);
  }
}

export { RefreshTokenController };
