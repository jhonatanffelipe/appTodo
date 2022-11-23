import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ForgotPasswordUseCase } from './ForgotPasswordUseCase';

class ForgotPasswordController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;

    const forgotPasswordUseCase = container.resolve(ForgotPasswordUseCase);

    await forgotPasswordUseCase.execute({ email });

    return response.status(204).send();
  }
}

export { ForgotPasswordController };
