import { User } from '@modules/accounts/infra/typeorm/entities/User';
import { Category } from '@modules/tasks/infra/typeorm/entities/Category';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('tasks')
class Task {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  userId: string;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'categoryId' })
  categoryId: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  when: Date;

  @Column()
  done: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Task };
