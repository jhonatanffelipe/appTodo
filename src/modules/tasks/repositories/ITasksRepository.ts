import { ICreateTaskDTO } from '../dtos/ICreateTaskDTO';
import { Task } from '../infra/typeorm/entities/Task';
import { IRequestListTasks } from '../infra/typeorm/repositories/TasksRepository';

interface ITasksRepository {
  create(data: ICreateTaskDTO): Promise<void>;
  listById(id: string): Promise<Task | undefined>;
  list(data: IRequestListTasks): Promise<Task[]>;
}

export { ITasksRepository };
