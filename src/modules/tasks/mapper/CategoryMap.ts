import { Category } from '../infra/typeorm/entities/Category';

const toCategoryDTO = ({ id, title, icon, createdAt, updatedAt }: Category): Category => {
  const user = {
    id,
    title,
    icon: icon ? `${process.env.APP_API_URL}:${process.env.PORT}/category/icon/${icon}` : '',
    createdAt,
    updatedAt,
  };

  return user;
};

export { toCategoryDTO };
