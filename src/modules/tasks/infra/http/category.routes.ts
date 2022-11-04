import { ListAllCategoriesController } from '@modules/tasks/useCases/ListAllCategoriesController';
import { Router } from 'express';

const categoryRoutes = Router();

const listAllCategoriesController = new ListAllCategoriesController();

categoryRoutes.get('/', listAllCategoriesController.handle);

export { categoryRoutes };
