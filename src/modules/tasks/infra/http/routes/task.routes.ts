import { Router } from 'express';

import { ensureAuthenticated } from '@modules/accounts/infra/http/middlewares/ensureAuthenticated';
import { CreateTaskController } from '@modules/tasks/useCases/CreateTaskController';
import { CreateTaskValidation } from '../middlewares/celebrate/CreateTaskValidation';
import { ListTasksController } from '@modules/tasks/useCases/ListTasksController';

const taskRoutes = Router();

const createTaskController = new CreateTaskController();
const listTasksController = new ListTasksController();

const createTaskValidation = new CreateTaskValidation();

taskRoutes.use(ensureAuthenticated);

taskRoutes.post('/', createTaskValidation.bodyCreate, createTaskController.handle);
taskRoutes.get('/', createTaskValidation.queryList, listTasksController.handle);

export { taskRoutes };
