import { ICreateTaskDTO } from '@modules/tasks/dtos/ICreateTaskDTO';
import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository';
import { Between, getRepository, Repository } from 'typeorm';
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

  async create({ userId, categoryId, title, description, when, done }: ICreateTaskDTO): Promise<void> {
    const task = this.repository.create({
      userId,
      categoryId,
      title,
      description,
      when,
      done,
    });

    await this.repository.save(task);

    return;
  }

  async listById(id: string, userId: string): Promise<Task | undefined> {
    const task = await this.repository.findOne({ where: { id, userId } });
    return task;
  }

  async list({ userId, initialDate, finalDate }: IRequestListTasks): Promise<Task[]> {
    const tasks = await this.repository.find({
      where: { userId, when: Between(initialDate, finalDate) },
      order: { when: 'ASC', createdAt: 'ASC' },
      relations: ['category'],
    });
    return tasks;
  }

  async upadate({ categoryId, title, description, when, done, id }: Task): Promise<Task | undefined> {
    const task = await this.repository.findOne(id);
    const newTask = this.repository.create({ ...task, categoryId, title, description, when, done });
    await this.repository.save(newTask);
    return newTask;
  }

  async delete(id: string, userId: string): Promise<void> {
    await this.repository.delete({ id, userId });
    return;
  }
}

export { TasksRepository, IRequestListTasks };
