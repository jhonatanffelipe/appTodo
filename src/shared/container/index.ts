import { container } from 'tsyringe';

import './providers/index';

import { ITasksRepository } from '@modules/tasks/repositories/ITasksRepository';
import { ICategoriesRepoitory } from '@modules/tasks/repositories/ICategoriesRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { UsersTokensRepository } from '@modules/accounts/infra/typeorm/repositories/UsersTokensRepository';
import { CategoriesRepository } from '@modules/tasks/infra/typeorm/repositories/CategoriesRepository';
import { TasksRepository } from '@modules/tasks/infra/typeorm/repositories/TasksRepository';

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);

container.registerSingleton<IUsersTokensRepository>('UsersTokensRepository', UsersTokensRepository);

container.registerSingleton<IUsersTokensRepository>('UsersTokensRepository', UsersTokensRepository);

container.registerSingleton<ICategoriesRepoitory>('CategoriesRepository', CategoriesRepository);

container.registerSingleton<ITasksRepository>('TasksRepository', TasksRepository);
