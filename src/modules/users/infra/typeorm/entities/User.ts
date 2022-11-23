import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { ResetPasswordToken } from './ResetPasswordToken';

@Entity('users')
class User {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  isAdmin?: boolean;

  @Column()
  avatar?: string;

  @CreateDateColumn()
  createdAt?: Date;

  @CreateDateColumn()
  updatedAt?: Date;

  @OneToMany(() => ResetPasswordToken, resetPasswordToken => resetPasswordToken.user)
  resetPasswordToken?: ResetPasswordToken[];

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { User };
