import IResponseCategoryDTO from '@modules/tasks/dtos/IResponseCategoryDTO';
import { toCategoryDTO } from '@modules/tasks/mapper/CategoryMap';
import { ICategoriesRepoitory } from '@modules/tasks/repositories/ICategoriesRepository';
import { inject, injectable } from 'tsyringe';
import { Category } from '../../infra/typeorm/entities/Category';

@injectable()
class ListAllCategoriesUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepoitory,
  ) {}

  async execute(): Promise<IResponseCategoryDTO[]> {
    const categories = await this.categoriesRepository.list();
    return categories.map(category => toCategoryDTO(category));
  }
}

export { ListAllCategoriesUseCase };
