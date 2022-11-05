import { Router } from 'express';

import { ensureAuthenticated } from '@modules/accounts/infra/http/middlewares/ensureAuthenticated';
import { CreateTaskController } from '@modules/tasks/useCases/createTask/CreateTaskController';
import { CreateTaskValidation } from '../middlewares/celebrate/CreateTaskValidation';
import { ListTasksController } from '@modules/tasks/useCases/listTasks/ListTasksController';
import { ListTasksValidation } from '../middlewares/celebrate/ListTasksValidation';
import { UpdateTaskController } from '@modules/tasks/useCases/updateTask/UpadateTaskController';
import { UpdateTaskValidation } from '../middlewares/celebrate/UpdateTaskValidation';
import { ListTaskByIdController } from '@modules/tasks/useCases/listTaskById/ListTaskByIdController';
import { ListTaskByIdValidation } from '../middlewares/celebrate/ListTaskByIdValidation';
import { DeleteTaskValidation } from '../middlewares/celebrate/DeleteTaskValidation';
import { DeleteTaskController } from '@modules/tasks/useCases/deleteTask/DeleteTaskController';

const taskRoutes = Router();

const createTaskController = new CreateTaskController();
const listTasksController = new ListTasksController();
const updateTaskController = new UpdateTaskController();
const listTaskByIdController = new ListTaskByIdController();
const deleteTaskController = new DeleteTaskController();

const createTaskValidation = new CreateTaskValidation();
const listTasksValidation = new ListTasksValidation();
const updateTaskValidation = new UpdateTaskValidation();
const listTaskByIdValidation = new ListTaskByIdValidation();
const deleteTaskValidation = new DeleteTaskValidation();

taskRoutes.use(ensureAuthenticated);

taskRoutes.post('/', createTaskValidation.body, createTaskController.handle);
taskRoutes.put('/:id', updateTaskValidation.params, updateTaskValidation.body, updateTaskController.handle);
taskRoutes.get('/', listTasksValidation.query, listTasksController.handle);
taskRoutes.get('/:id', listTaskByIdValidation.params, listTaskByIdController.handle);
taskRoutes.delete('/:id', deleteTaskValidation.params, deleteTaskController.handle);

export { taskRoutes };
