import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListTaskByIdUseCase } from './ListTaskByIdUseCase';

class ListTaskByIdController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const listTaskByIdUseCase = container.resolve(ListTaskByIdUseCase);

    const userId = request.user.id;
    const { id } = request.params;

    const task = await listTaskByIdUseCase.execute(id, userId);

    return response.json(task);
  }
}

export { ListTaskByIdController };
