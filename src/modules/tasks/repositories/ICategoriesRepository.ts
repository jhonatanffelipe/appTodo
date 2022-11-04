import { Category } from '../infra/typeorm/entities/Category';

interface ICategoriesRepoitory {
  list(): Promise<Category[]>;
  findById(id: string): Promise<Category | undefined>;
}

export { ICategoriesRepoitory };
