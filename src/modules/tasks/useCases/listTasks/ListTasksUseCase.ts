import { toCategoryDTO } from '@modules/tasks/mapper/CategoryMap';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository';
import { AppError } from '@shared/errors/AppError';
import { IListTasksDTO } from '../../dtos/IListTasksDTO';
import { IDateProvider } from '@shared/container/providers/DateProvider/IDateProvider';
import IResponseTaskDTO from '@modules/tasks/dtos/IResponseTaskDTO';
import { toTaskDTO } from '@modules/tasks/mapper/TaskMap';

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

  public async execute({ userId, date, type }: IListTasksDTO): Promise<IResponseTaskDTO[]> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new AppError('Token inválido!', 401);
    }

    const { initialDate, finalDate } = this.dateProvider.checkDate(date, type);

    const tasks = await this.tasksRepository.list({
      userId,
      initialDate,
      finalDate,
    });

    return tasks.map(task => {
      return toTaskDTO(task);
    });
  }
}

export { ListTasksUseCase };
