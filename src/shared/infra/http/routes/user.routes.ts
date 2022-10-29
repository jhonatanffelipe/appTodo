import { Router } from 'express';
import { CreateUserController } from '../../../../modules/accounts/useCases/createUser/CreateUserController';
import { ListAllUsersController } from '../../../../modules/accounts/useCases/listAllUsers/ListAllUsersController';
import { ListUserByIdController } from '../../../../modules/accounts/useCases/listUsersById/ListUsersByIdController';
import { CreateUserValidation } from '../middlewares/celebrate/CreateUserValidation';
import { ListUsersByIdValidation } from '../middlewares/celebrate/ListUsersByIdValidation';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const userRoutes = Router();

const createUserController = new CreateUserController();
const listAllUsersController = new ListAllUsersController();
const listUserByIdController = new ListUserByIdController();

const createUserValidation = new CreateUserValidation();
const listUsersByIdValidation = new ListUsersByIdValidation();

userRoutes.post('/', createUserValidation.body, createUserController.handle);
userRoutes.get('/', ensureAuthenticated, listAllUsersController.handle);
userRoutes.get('/:id', ensureAuthenticated, listUsersByIdValidation.params, listUserByIdController.handle);

export { userRoutes };
