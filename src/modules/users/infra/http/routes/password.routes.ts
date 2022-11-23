import { ForgotPasswordController } from '@modules/users/useCases/forgotPassword/ForgotPasswordController';
import { ResetPasswordController } from '@modules/users/useCases/resetPassword/ResetPasswordController';
import { UpdatePasswordController } from '@modules/users/useCases/updateUserPassword/UpdatePasswordController';
import { Router } from 'express';
import { ForgotPasswordValidation } from '../middlewares/celebrate/ForgotPasswordValidation';
import { ResetPasswordValidation } from '../middlewares/celebrate/ResetPasswordValidation';
import { UpdatePasswordValidation } from '../middlewares/celebrate/UpdatePasswordValidation';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const passwordRoutes = Router();

const resetPasswordValidation = new ResetPasswordValidation();
const forgotPasswordValidation = new ForgotPasswordValidation();
const updatePasswordValidation = new UpdatePasswordValidation();

const resetPasswordController = new ResetPasswordController();
const forgotPasswordController = new ForgotPasswordController();
const updatePasswordController = new UpdatePasswordController();

passwordRoutes.post('/forgot', forgotPasswordValidation.body, forgotPasswordController.handle);
passwordRoutes.put('/reset', resetPasswordValidation.body, resetPasswordController.handle);

passwordRoutes.use(ensureAuthenticated);
passwordRoutes.put('/update', updatePasswordValidation.body, updatePasswordController.handle);

export { passwordRoutes };
