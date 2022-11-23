import { compare, hash } from 'bcryptjs';
import { IHashProvider } from '../IHashProvider';

class BCryptProvider implements IHashProvider {
  public async comparePasswords(password: string, hashedPassword: string): Promise<boolean> {
    return await compare(password, hashedPassword);
  }

  public async hashPassword(password: string): Promise<string> {
    return await hash(password, 8);
  }
}

export { BCryptProvider };
