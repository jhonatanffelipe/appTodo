import moment from 'moment';
import { inject, injectable } from 'tsyringe';

import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository';
import { AppError } from '@shared/errors/AppError';
import { IListTasksDTO } from '../dtos/IListTasksDTO';
import { Task } from '../infra/typeorm/entities/Task';

@injectable()
class ListTasksUseCase {
  private initialDate: Date;
  private finalDate: Date;

  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('TasksRepository')
    private tasksRepository: ITasksRepository,
  ) {}

  public async execute({ userId, date, type }: IListTasksDTO): Promise<Task[]> {
    const user = await this.usersRepository.findById(userId);

    if (!user) {
      throw new AppError('Token inválido!', 401);
    }

    if (type === 'D') {
      this.initialDate = moment(date).startOf('day').toDate();
      this.finalDate = moment(date).endOf('day').toDate();
    } else if (type === 'W') {
      this.initialDate = moment(date).startOf('week').toDate();
      this.finalDate = moment(date).endOf('week').toDate();
    } else if (type === 'M') {
      this.initialDate = moment(date).startOf('month').toDate();
      this.finalDate = moment(date).endOf('month').toDate();
    } else if (type === 'Y') {
      this.initialDate = moment(date).startOf('year').toDate();
      this.finalDate = moment(date).endOf('year').toDate();
    }

    const tasks = this.tasksRepository.list({
      userId,
      initialDate: this.initialDate,
      finalDate: this.finalDate,
    });

    return tasks;
  }
}

export { ListTasksUseCase };
