import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListTasksUseCase } from './ListTasksUseCase';

class ListTasksController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const listTasksUseCase = container.resolve(ListTasksUseCase);

    const userId = request.user.id;
    const { date, type } = request.query;

    const tasks = await listTasksUseCase.execute({
      userId,
      date: new Date(`${date}`),
      type: `${type}`,
    });

    return response.json(tasks);
  }
}

export { ListTasksController };
