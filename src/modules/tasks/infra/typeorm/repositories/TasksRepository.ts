import { ICreateTaskDTO } from '@modules/tasks/dtos/ICreateTaskDTO';
import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository';
import { Between, getRepository, LessThanOrEqual, MoreThanOrEqual, Repository } from 'typeorm';
import { Task } from '../entities/Task';

interface IRequestListTasks {
  userId: string;
  initialDate: Date | null;
  finalDate: Date | null;
}

class TasksRepository implements ITasksRepository {
  private repository: Repository<Task>;

  constructor() {
    this.repository = getRepository(Task);
  }

  async create({ userId, categoryId, title, description, when }: ICreateTaskDTO): Promise<void> {
    const task = this.repository.create({
      userId,
      categoryId,
      title,
      description,
      when,
    });

    await this.repository.save(task);

    return;
  }

  async listById(id: string): Promise<Task | undefined> {
    const task = await this.repository.findOne(id);
    return task;
  }

  async list({ userId, initialDate, finalDate }: IRequestListTasks): Promise<Task[]> {
    const tasks = await this.repository.find({
      where: { userId, when: Between(initialDate, finalDate) },
    });
    return tasks;
  }
}

export { TasksRepository, IRequestListTasks };
