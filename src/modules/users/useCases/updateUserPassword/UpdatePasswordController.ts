import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdatePasswordUseCase } from './UpdatePasswordUseCase';

class UpdatePasswordController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const { currentPassword, password, confirmPassword } = request.body;

    const updatePasswordUseCase = container.resolve(UpdatePasswordUseCase);

    await updatePasswordUseCase.execute({ userId: id, currentPassword, password, confirmPassword });

    return response.status(200).send();
  }
}

export { UpdatePasswordController };
