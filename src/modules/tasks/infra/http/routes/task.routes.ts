import { Router } from 'express';

import { ensureAuthenticated } from '@modules/accounts/infra/http/middlewares/ensureAuthenticated';
import { CreateTaskController } from '@modules/tasks/useCases/CreateTaskController';
import { CreateTaskValidation } from '../middlewares/celebrate/CreateTaskValidation';

const taskRoutes = Router();

const createTaskController = new CreateTaskController();

const createTaskValidation = new CreateTaskValidation();

taskRoutes.post('/', ensureAuthenticated, createTaskValidation.body, createTaskController.handle);

export { taskRoutes };
