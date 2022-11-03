import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from '@modules/accounts/useCases/createUser/CreateUserController';
import { ListAllUsersController } from '@modules/accounts/useCases/listAllUsers/ListAllUsersController';
import { ShowProfileController } from '@modules/accounts/useCases/showProfile/ShowProfileController';
import { CreateUserValidation } from '@modules/accounts/infra/http/middlewares/celebrate/CreateUserValidation';
import { UpdateUserAvatarController } from '@modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import uploadConfig from '@config/upload';

const userRoutes = Router();
const uploadAvatar = multer(uploadConfig);

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const showProfileController = new ShowProfileController();
const updateUserAvatarController = new UpdateUserAvatarController();

const createUserValidation = new CreateUserValidation();

userRoutes.get('/profile', ensureAuthenticated, showProfileController.handle);
userRoutes.post('/', createUserValidation.body, createUserController.handle);
userRoutes.get('/', ensureAuthenticated, listAllUsersController.handle);
userRoutes.patch('/avatar', ensureAuthenticated, uploadAvatar.single('avatar'), updateUserAvatarController.handle);

export { userRoutes };
