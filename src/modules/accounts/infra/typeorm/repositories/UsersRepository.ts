import { getRepository, Repository } from 'typeorm';
import { runInThisContext } from 'vm';

import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../../../repositories/IUsersRepository';
import { User } from '../entities/User';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({ name, email, password });
    await this.repository.save(user);
    return;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.repository.findOne({ email });
    return user ? user : null;
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.repository.findOne(id);
    return user ? user : null;
  }

  async findAll(): Promise<User[]> {
    const users = this.repository.find();
    return users;
  }
}

export { UsersRepository };
