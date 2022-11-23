import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { User } from './User';

@Entity('usersTokens')
class UserTokens {
  @PrimaryColumn()
  id: string;

  @Column()
  accessToken: string;

  @Column()
  accessTokenExpiresDate: Date;

  @Column()
  refreshToken: string;

  @Column()
  refreshTokenExpiresDate: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  userId: string;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { UserTokens };
