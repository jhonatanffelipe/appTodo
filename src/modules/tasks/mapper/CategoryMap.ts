import IResponseCategoryDTO from '../dtos/IResponseCategoryDTO';
import { Category } from '../infra/typeorm/entities/Category';

const toCategoryDTO = ({ id = '', name, image, createdAt, updatedAt }: Category): IResponseCategoryDTO => {
  const category = {
    id,
    name,
    imageUrl: image ? `${process.env.APP_API_URL}:${process.env.PORT}/category/${image}` : '',
    createdAt,
    updatedAt,
  };

  return category;
};

export { toCategoryDTO };
