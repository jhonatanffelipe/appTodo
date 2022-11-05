import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { DeleteTaskUseCase } from './DeleteTaskUseCase';

class DeleteTaskController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const deleteTaskUseCase = container.resolve(DeleteTaskUseCase);

    const userId = request.user.id;
    const { id } = request.params;

    await deleteTaskUseCase.execute(id, userId);

    return response.send();
  }
}

export { DeleteTaskController };
