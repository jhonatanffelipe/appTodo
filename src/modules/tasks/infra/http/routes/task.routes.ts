import { Router } from 'express';

import { ensureAuthenticated } from '@modules/accounts/infra/http/middlewares/ensureAuthenticated';
import { CreateTaskController } from '@modules/tasks/useCases/CreateTaskController';
import { CreateTaskValidation } from '../middlewares/celebrate/CreateTaskValidation';
import { ListTasksController } from '@modules/tasks/useCases/ListTasksController';
import { ListTasksValidation } from '../middlewares/celebrate/ListTasksValidation';
import { UpdateTaskController } from '@modules/tasks/useCases/UpadateTaskController';
import { UpdateTaskValidation } from '../middlewares/celebrate/UpdateTaskValidation';
import { ListTaskByIdController } from '@modules/tasks/useCases/ListTaskByIdController';
import { ListTaskByIdValidation } from '../middlewares/celebrate/ListTaskByIdValidation';

const taskRoutes = Router();

const createTaskController = new CreateTaskController();
const listTasksController = new ListTasksController();
const updateTaskController = new UpdateTaskController();
const listTaskByIdController = new ListTaskByIdController();

const createTaskValidation = new CreateTaskValidation();
const listTasksValidation = new ListTasksValidation();
const updateTaskValidation = new UpdateTaskValidation();
const listTaskByIdValidation = new ListTaskByIdValidation();

taskRoutes.use(ensureAuthenticated);

taskRoutes.post('/', createTaskValidation.body, createTaskController.handle);
taskRoutes.put('/:id', updateTaskValidation.params, updateTaskValidation.body, updateTaskController.handle);
taskRoutes.get('/', listTasksValidation.query, listTasksController.handle);
taskRoutes.get('/:id', listTaskByIdValidation.params, listTaskByIdController.handle);

export { taskRoutes };
