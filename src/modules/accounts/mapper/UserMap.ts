import { IUserResponseDTO } from '../dtos/IUserResponseDTO';
import { User } from '../infra/typeorm/entities/User';

const toDTO = ({ email, name, id, avatar, createdAt, updatedAt }: User): IUserResponseDTO => {
  const user = { email, name, id, avatar, createdAt, updatedAt };
  return user;
};

export { toDTO };
