import { Router } from 'express';

import { authenticateRoutes } from '@modules/accounts/infra/http/routes/authenticate.routes';
import { userRoutes } from '@modules/accounts/infra/http/routes/user.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/auth', authenticateRoutes);

export { routes };
