import { Category } from '../infra/typeorm/entities/Category';

interface ICategoriesRepoitory {
  list(): Promise<Category[]>;
}

export { ICategoriesRepoitory };
