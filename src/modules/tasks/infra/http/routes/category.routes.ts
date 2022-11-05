import { ensureAuthenticated } from '@modules/accounts/infra/http/middlewares/ensureAuthenticated';
import { ListAllCategoriesController } from '@modules/tasks/useCases/listAllCategories/ListAllCategoriesController';
import { Router } from 'express';

const categoryRoutes = Router();

const listAllCategoriesController = new ListAllCategoriesController();

categoryRoutes.get('/', ensureAuthenticated, listAllCategoriesController.handle);

export { categoryRoutes };
