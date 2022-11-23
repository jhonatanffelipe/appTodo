import { Router } from 'express';
import multer from 'multer';

import { CreateUserController } from '@modules/users/useCases/createUser/CreateUserController';
import { ListAllUsersController } from '@modules/users/useCases/listAllUsers/ListAllUsersController';
import { ShowProfileController } from '@modules/users/useCases/showProfile/ShowProfileController';
import { CreateUserValidation } from '@modules/users/infra/http/middlewares/celebrate/CreateUserValidation';
import { UpdateUserAvatarController } from '@modules/users/useCases/updateUserAvatar/UpdateUserAvatarController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import uploadConfig from '@config/upload';

const userRoutes = Router();
const uploadAvatar = multer(uploadConfig);

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const showProfileController = new ShowProfileController();
const updateUserAvatarController = new UpdateUserAvatarController();

const createUserValidation = new CreateUserValidation();

userRoutes.post('/', createUserValidation.body, createUserController.handle);

userRoutes.use(ensureAuthenticated);
userRoutes.get('/profile', showProfileController.handle);
userRoutes.get('/', listAllUsersController.handle);
userRoutes.patch('/avatar', uploadAvatar.single('avatar'), updateUserAvatarController.handle);

export { userRoutes };
