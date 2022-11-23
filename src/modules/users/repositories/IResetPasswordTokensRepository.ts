import { ResetPasswordToken } from '../infra/typeorm/entities/ResetPasswordToken';

interface IResetPasswordTokensRepository {
  generateToken(user_id: string): Promise<ResetPasswordToken>;
  findByToken(token: string): Promise<ResetPasswordToken | undefined>;
  deleteByUserId(user_id: string): Promise<void>;
}

export { IResetPasswordTokensRepository };
