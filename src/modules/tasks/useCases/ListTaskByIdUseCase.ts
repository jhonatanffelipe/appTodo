import moment from 'moment';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository';
import { AppError } from '@shared/errors/AppError';
import { IListTasksDTO } from '../dtos/IListTasksDTO';
import { Task } from '../infra/typeorm/entities/Task';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';

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
