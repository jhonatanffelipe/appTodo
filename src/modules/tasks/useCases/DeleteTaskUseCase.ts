import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository';
import { ICategoriesRepoitory } from '@modules/tasks/repositories/ICategoriesRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IUpdateTaskDTO } from '../dtos/IUpdateTaskDTO';
import { Task } from '../infra/typeorm/entities/Task';

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
