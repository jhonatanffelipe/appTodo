import { Router } from 'express';

import { AuthenticateUserContoller } from '../../../../modules/accounts/useCases/authenticateUser/AuthenticateUserController';
import { RefreshTokenController } from '../../../../modules/accounts/useCases/refreshToken/RefreshTokenController';
import { AuthenticateValidation } from '../middlewares/celebrate/AuthenticateValidation';
import { RefreshTokenValidation } from '../middlewares/celebrate/RefreshTokenValidation';

const authenticateRoutes = Router();

const authenticateUserContoller = new AuthenticateUserContoller();
const refreshTokenController = new RefreshTokenController();

const authenticateValidation = new AuthenticateValidation();
const refreshTokenValidation = new RefreshTokenValidation();

authenticateRoutes.post('/', authenticateValidation.body, authenticateUserContoller.handle);
authenticateRoutes.post('/refresh-token', refreshTokenValidation.body, refreshTokenController.handle);

export { authenticateRoutes };
