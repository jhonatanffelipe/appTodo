import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Task } from './Task';

@Entity('categories')
class Category {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  image: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Task, task => task.category)
  tasks: Task[];

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Category };
