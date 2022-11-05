import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository';
import { AppError } from '@shared/errors/AppError';
import { IListTasksDTO } from '../dtos/IListTasksDTO';
import { Task } from '../infra/typeorm/entities/Task';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';

@injectable()
class ListTasksUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('DateProvider')
    private dateProvider: IDateProvider,
    @inject('TasksRepository')
    private tasksRepository: ITasksRepository,
  ) {}

  public async execute({ userId, date, type }: IListTasksDTO): Promise<Task[]> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new AppError('Token inválido!', 401);
    }

    const { initialDate, finalDate } = this.dateProvider.checkDate(date, type);

    const tasks = this.tasksRepository.list({
      userId,
      initialDate,
      finalDate,
    });

    return tasks;
  }
}

export { ListTasksUseCase };
