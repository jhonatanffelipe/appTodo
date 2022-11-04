import { ICategoriesRepoitory } from '@modules/tasks/repositories/ICategoriesRepository';
import { inject, injectable } from 'tsyringe';
import { Category } from '../infra/typeorm/entities/Category';
import { toCategoryDTO } from '../mapper/CategoryMap';

@injectable()
class ListAllCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepoitory,
  ) {}

  async execute(): Promise<Category[]> {
    const categories = await this.categoriesRepository.list();
    return categories;
  }
}

export { ListAllCategoriesUseCase };
