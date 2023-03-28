import { Category } from '@modules/tasks/infra/typeorm/entities/Category';
import { getRepository, MigrationInterface } from 'typeorm';

const categories = [
  { name: 'checkList', image: 'checkList.svg' },
  { name: 'food', image: 'food.svg' },
  { name: 'gyn', image: 'gyn.svg' },
  { name: 'notes', image: 'notes.svg' },
  { name: 'people', image: 'people.svg' },
  { name: 'schedule', image: 'schedule.svg' },
  { name: 'school', image: 'school.svg' },
  { name: 'sports', image: 'sports.svg' },
  { name: 'travel', image: 'travel.svg' },
  { name: 'work', image: 'work.svg' },
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
