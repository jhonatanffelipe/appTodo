import { IUserResponseDTO } from '../dtos/IUserResponseDTO';
import { User } from '../infra/typeorm/entities/User';

const toDTO = ({ email, name, id, avatar_url, created_at, updated_at }: User): IUserResponseDTO => {
  const user = { email, name, id, avatar_url, created_at, updated_at };
  return user;
};

export { toDTO };
