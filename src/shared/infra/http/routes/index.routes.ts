import { Router } from 'express';

import { authenticateRoutes } from '@modules/users/infra/http/routes/authenticate.routes';
import { userRoutes } from '@modules/users/infra/http/routes/user.routes';
import { categoryRoutes } from '@modules/tasks/infra/http/routes/category.routes';
import { taskRoutes } from '@modules/tasks/infra/http/routes/task.routes';
import { passwordRoutes } from '@modules/users/infra/http/routes/password.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/auth', authenticateRoutes);
routes.use('/categories', categoryRoutes);
routes.use('/tasks', taskRoutes);
routes.use('/password', passwordRoutes);

export { routes };
