import { container } from 'tsyringe';

import './providers';

import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository';
import { ICategoriesRepoitory } from '@modules/tasks/repositories/ICategoriesRepository';
import { IUsersRepository } from '@modules/users/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/users/repositories/IUsersTokensRepository';
import { IResetPasswordTokensRepository } from '@modules/users/repositories/IResetPasswordTokensRepository';

import { UsersRepository } from '@modules/users/infra/typeorm/repositories/UsersRepository';
import { UsersTokensRepository } from '@modules/users/infra/typeorm/repositories/UsersTokensRepository';
import { CategoriesRepository } from '@modules/tasks/infra/typeorm/repositories/CategoriesRepository';
import { TasksRepository } from '@modules/tasks/infra/typeorm/repositories/TasksRepository';
import { ResetPasswordTokensRepository } from '@modules/users/infra/typeorm/repositories/ResetPasswordTokensRepository';

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);

container.registerSingleton<IUsersTokensRepository>('UsersTokensRepository', UsersTokensRepository);

container.registerSingleton<IUsersTokensRepository>('UsersTokensRepository', UsersTokensRepository);

container.registerSingleton<ICategoriesRepoitory>('CategoriesRepository', CategoriesRepository);

container.registerSingleton<ITasksRepository>('TasksRepository', TasksRepository);

container.registerSingleton<IResetPasswordTokensRepository>(
  'ResetPasswordTokensRepository',
  ResetPasswordTokensRepository,
);
