import { ICategoriesRepoitory } from '@modules/tasks/repositories/ICategoriesRepository';
import { container } from 'tsyringe';

import './providers/index';

import { UsersRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { UsersTokensRepository } from '@modules/accounts/infra/typeorm/repositories/UsersTokensRepository';
import { IUsersRepository } from '@modules/accounts/repositories/IUsersRepository';
import { IUsersTokensRepository } from '@modules/accounts/repositories/IUsersTokensRepository';
import { CategoriesRepository } from '@modules/tasks/infra/typeorm/repositories/CategoriesRepository';

container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);

container.registerSingleton<IUsersTokensRepository>('UsersTokensRepository', UsersTokensRepository);

container.registerSingleton<IUsersTokensRepository>('UsersTokensRepository', UsersTokensRepository);

container.registerSingleton<ICategoriesRepoitory>('CategoriesRepository', CategoriesRepository);
