import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository';
import { ICategoriesRepoitory } from '@modules/tasks/repositories/ICategoriesRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IUpdateTaskDTO } from '../../dtos/IUpdateTaskDTO';
import { Task } from '../../infra/typeorm/entities/Task';

@injectable()
class UpdateTaskUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepoitory,
    @inject('TasksRepository')
    private tasksRepository: ITasksRepository,
  ) {}

  public async execute({
    id,
    userId,
    categoryId,
    title,
    description,
    when,
    done,
  }: IUpdateTaskDTO): Promise<Task | undefined> {
    const user = this.usersRepository.findById(userId);

    if (!user) {
      throw new AppError('Usuário não encontrado!', 400);
    }

    const category = await this.categoriesRepository.findById(categoryId);

    if (!category) {
      throw new AppError('Categoria não encontrada!', 400);
    }

    const task = await this.tasksRepository.listById(id, userId);

    if (!task || task.userId !== userId) {
      throw new AppError('Atividade não encontrada!', 400);
    }

    const newTask = await this.tasksRepository.upadate({
      id,
      categoryId,
      title,
      description,
      when,
      done,
    });

    return newTask;
  }
}

export { UpdateTaskUseCase };
