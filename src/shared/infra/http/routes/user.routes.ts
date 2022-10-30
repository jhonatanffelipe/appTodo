import { Router } from 'express';
import { CreateUserController } from '../../../../modules/accounts/useCases/createUser/CreateUserController';
import { ListAllUsersController } from '../../../../modules/accounts/useCases/listAllUsers/ListAllUsersController';
import { ShowProfileController } from '../../../../modules/accounts/useCases/showProfile/ShowProfileController';
import { CreateUserValidation } from '../middlewares/celebrate/CreateUserValidation';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const userRoutes = Router();

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const showProfileController = new ShowProfileController();

const createUserValidation = new CreateUserValidation();

userRoutes.get('/profile', ensureAuthenticated, showProfileController.handle);
userRoutes.post('/', createUserValidation.body, createUserController.handle);
userRoutes.get('/', ensureAuthenticated, listAllUsersController.handle);

export { userRoutes };
