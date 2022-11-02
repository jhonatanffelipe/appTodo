import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { RefreshTokenUseCase } from './RefreshTokenUseCase';

class RefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const refreshToken = request.body.refreshToken || request.headers['x-refreshToken'] || request.query.refreshToken;

    const refreshTokenUseCase = container.resolve(RefreshTokenUseCase);

    const refreshToken_new = await refreshTokenUseCase.execute(refreshToken);

    return response.json(refreshToken_new);
  }
}

export { RefreshTokenController };
