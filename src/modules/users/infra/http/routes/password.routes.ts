import { ForgotPasswordController } from '@modules/users/useCases/forgotPassword/ForgotPasswordController';
import { ResetPasswordController } from '@modules/users/useCases/resetPassword/ResetPasswordController';
import { Router } from 'express';
import { ForgotPasswordValidation } from '../middlewares/celebrate/ForgotPasswordValidation';
import { ResetPasswordValidation } from '../middlewares/celebrate/ResetPasswordValidation';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const passwordRoutes = Router();

const resetPasswordValidation = new ResetPasswordValidation();
const forgotPasswordValidation = new ForgotPasswordValidation();

const resetPasswordController = new ResetPasswordController();
const forgotPasswordController = new ForgotPasswordController();

passwordRoutes.post('/forgot', forgotPasswordValidation.body, forgotPasswordController.handle);
passwordRoutes.put('/reset', resetPasswordValidation.body, resetPasswordController.handle);

passwordRoutes.use(ensureAuthenticated);

export { passwordRoutes };
