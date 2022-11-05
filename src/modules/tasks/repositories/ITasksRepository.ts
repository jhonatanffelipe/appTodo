import { ICreateTaskDTO } from '../dtos/ICreateTaskDTO';
import { Task } from '../infra/typeorm/entities/Task';
import { IRequestListTasks } from '../infra/typeorm/repositories/TasksRepository';

interface ITasksRepository {
  create(data: ICreateTaskDTO): Promise<void>;
  upadate(data: Task): Promise<Task | undefined>;
  listById(id: string, userId: string): Promise<Task | undefined>;
  list(data: IRequestListTasks): Promise<Task[]>;
  delete(id: string, userId: string): Promise<void>;
}

export { ITasksRepository };
