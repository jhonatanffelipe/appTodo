import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { CreateTaskUseCase } from './CreateTaskUseCase';

class CreateTaskController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const createTaskUseCase = container.resolve(CreateTaskUseCase);

    const userId = request.user.id;
    const { categoryId, title, description, when } = request.body;

    await createTaskUseCase.execute({ userId, categoryId, title, description, when });

    return response.status(201).send();
  }
}

export { CreateTaskController };
