import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository';
import { inject, injectable } from 'tsyringe';
import { Task } from '../../infra/typeorm/entities/Task';

@injectable()
class DeleteTaskUseCase {
  constructor(
    @inject('TasksRepository')
    private tasksRepository: ITasksRepository,
  ) {}

  public async execute(id: string, userId: string): Promise<Task | undefined> {
    await this.tasksRepository.delete(id, userId);
    return;
  }
}

export { DeleteTaskUseCase };
