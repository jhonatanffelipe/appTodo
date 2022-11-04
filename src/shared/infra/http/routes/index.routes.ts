import { Router } from 'express';

import { authenticateRoutes } from '@modules/accounts/infra/http/routes/authenticate.routes';
import { userRoutes } from '@modules/accounts/infra/http/routes/user.routes';
import { categoryRoutes } from '@modules/tasks/infra/http/category.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/auth', authenticateRoutes);
routes.use('/categories', categoryRoutes);

export { routes };
