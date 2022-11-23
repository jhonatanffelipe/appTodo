import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { User } from './User';

@Entity('resetPasswordTokens')
class ResetPasswordToken {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  userId: string;

  @Column()
  token: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, user => user.resetPasswordToken)
  user?: User;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }

    if (!this.token) {
      this.token = uuidv4();
    }
  }
}

export { ResetPasswordToken };
