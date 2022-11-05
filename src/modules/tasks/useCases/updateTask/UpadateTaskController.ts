import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateTaskUseCase } from './UpdateTaskUseCase';

class UpdateTaskController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const updateTaskUseCase = container.resolve(UpdateTaskUseCase);

    const userId = request.user.id;
    const { id } = request.params;
    const { categoryId, title, description, when, done } = request.body;

    const task = await updateTaskUseCase.execute({ id, userId, categoryId, title, description, when, done });

    return response.status(201).json(task);
  }
}

export { UpdateTaskController };
