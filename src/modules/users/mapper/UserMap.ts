import IResponseUserDTO from '../dtos/IResponseUserDTO';
import { User } from '../infra/typeorm/entities/User';

const toUserDTO = ({ id = '', name, email, avatar, isAdmin, createdAt, updatedAt }: User): IResponseUserDTO => {
  const user = {
    id,
    name,
    email,
    avatarUrl: avatar ? `${process.env.APP_API_URL}:${process.env.PORT}/avatar/${avatar}` : '',
    isAdmin: isAdmin || false,
    createdAt,
    updatedAt,
  };

  return user;
};

export { toUserDTO };
