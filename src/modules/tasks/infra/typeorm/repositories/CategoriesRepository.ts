import { ICategoriesRepoitory } from '@modules/tasks/repositories/ICategoriesRepository';
import { getRepository, Repository } from 'typeorm';
import { Category } from '../entities/Category';

class CategoriesRepository implements ICategoriesRepoitory {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  public async list(): Promise<Category[]> {
    const categories = this.repository.find();
    return categories;
  }

  public async findById(id: string): Promise<Category | undefined> {
    const category = await this.repository.findOne(id);
    return category;
  }
}

export { CategoriesRepository };
