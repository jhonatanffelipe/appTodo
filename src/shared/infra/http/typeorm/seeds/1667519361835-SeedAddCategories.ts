import { Category } from '@modules/tasks/infra/typeorm/entities/Category';
import { CategoriesRepository } from '@modules/tasks/infra/typeorm/repositories/CategoriesRepository';
import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';

const categories = [
  { name: 'check-list' },
  { name: 'food' },
  { name: 'gyn' },
  { name: 'notes' },
  { name: 'people' },
  { name: 'schedule' },
  { name: 'school' },
  { name: 'sports' },
  { name: 'travel' },
  { name: 'work' },
];

export class SeedAddCategories1667519361835 implements MigrationInterface {
  public async up(): Promise<void> {
    const repository = getRepository(Category, 'seed');

    for await (const category of categories) {
      const newCategory = repository.create(category);
      await repository.save(newCategory);
    }
  }

  public async down(): Promise<void> {
    const repository = getRepository(Category, 'seed');

    for await (const category of categories) {
      await repository.delete({ name: category.name });
    }
  }
}
