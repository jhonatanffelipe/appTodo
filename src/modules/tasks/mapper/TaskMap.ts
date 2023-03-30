import IResponseTaskDTO from '../dtos/IResponseTaskDTO';
import { Task } from '../infra/typeorm/entities/Task';

const toTaskDTO = (data: Task): IResponseTaskDTO => {
  const category = {
    id: data.category?.id || '',
    name: data.category?.name || '',
    imageUrl: data.category?.image
      ? `${process.env.APP_API_URL}:${process.env.PORT}/category/${data.category?.image}`
      : '',
  };

  return {
    id: data.id,
    title: data.title,
    description: data.description,
    when: data.when,
    done: data.done,
    userId: data.userId || '',
    categoryId: data.categoryId,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    deletedAt: data.deletedAt,
    category,
  };
};

export { toTaskDTO };
