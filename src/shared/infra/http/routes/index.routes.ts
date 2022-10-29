import { Router } from 'express';

import { userRoutes } from './user.routes';
import { authenticateRoutes } from './authenticate.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/auth', authenticateRoutes);

export { routes };
