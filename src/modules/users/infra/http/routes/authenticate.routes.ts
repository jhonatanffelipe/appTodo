import { Router } from 'express';

import { AuthenticateUserContoller } from '@modules/users/useCases/authenticateUser/AuthenticateUserController';
import { AuthenticateValidation } from '@modules/users/infra/http/middlewares/celebrate/AuthenticateValidation';

const authenticateRoutes = Router();

const authenticateUserContoller = new AuthenticateUserContoller();

const authenticateValidation = new AuthenticateValidation();

authenticateRoutes.post('/', authenticateValidation.body, authenticateUserContoller.handle);

export { authenticateRoutes };
