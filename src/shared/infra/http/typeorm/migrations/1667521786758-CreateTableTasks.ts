import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableTasks1667521786758 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tasks',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'userId',
            type: 'uuid',
          },
          {
            name: 'categoryId',
            type: 'uuid',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'dateHour',
            type: 'timestamp',
          },
          {
            name: 'done',
            type: 'boolean',
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deletedAt',
            type: 'timestamp',
            default: null,
          },
        ],
        foreignKeys: [
          {
            name: 'FKUserId',
            columnNames: ['userId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'users',
          },
          {
            name: 'FKCategoryId',
            columnNames: ['categoryId'],
            referencedColumnNames: ['id'],
            referencedTableName: 'categories',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('tasks');
  }
}
