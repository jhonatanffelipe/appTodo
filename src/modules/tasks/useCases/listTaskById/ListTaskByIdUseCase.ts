import { inject, injectable } from 'tsyringe';
import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository';
import { Task } from '../../infra/typeorm/entities/Task';

@injectable()
class ListTaskByIdUseCase {
  constructor(
    @inject('TasksRepository')
    private tasksRepository: ITasksRepository,
  ) {}

  public async execute(id: string, userId: string): Promise<Task | undefined> {
    const tasks = await this.tasksRepository.listById(id, userId);
    return tasks;
  }
}

export { ListTaskByIdUseCase };
