import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository';
import { ICategoriesRepoitory } from '@modules/tasks/repositories/ICategoriesRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { ICreateTaskDTO } from '@modules/tasks/dtos/ICreateTaskDTO';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class CreateTaskUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepoitory,
    @inject('TasksRepository')
    private tasksRepository: ITasksRepository,
  ) {}
  public async execute({ userId, categoryId, title, description, when }: ICreateTaskDTO): Promise<void> {
    const user = this.usersRepository.findById(userId);

    if (!user) {
      throw new AppError('Usuário não encontrado!', 400);
    }

    const category = await this.categoriesRepository.findById(categoryId);

    if (!category) {
      throw new AppError('Categoria não encontrada!', 400);
    }

    await this.tasksRepository.create({ userId, categoryId, title, description, when });
  }
}

export { CreateTaskUseCase };
