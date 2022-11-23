import { IResetPasswordTokensRepository } from '@modules/users/repositories/IResetPasswordTokensRepository';
import { getRepository, Repository } from 'typeorm';
import { ResetPasswordToken } from '../entities/ResetPasswordToken';

class ResetPasswordTokensRepository implements IResetPasswordTokensRepository {
  private repository: Repository<ResetPasswordToken>;

  constructor() {
    this.repository = getRepository(ResetPasswordToken);
  }

  public async generateToken(userId: string): Promise<ResetPasswordToken> {
    const resetPasswordToken = this.repository.create({ userId });
    await this.repository.save(resetPasswordToken);
    return resetPasswordToken;
  }

  public async findByToken(token: string): Promise<ResetPasswordToken | undefined> {
    const resetPasswordToken = await this.repository.findOne({ where: { token }, relations: ['user'] });
    return resetPasswordToken;
  }

  public async deleteByUserId(userId: string): Promise<void> {
    await this.repository.delete({ userId });
    return;
  }
}

export { ResetPasswordTokensRepository };
