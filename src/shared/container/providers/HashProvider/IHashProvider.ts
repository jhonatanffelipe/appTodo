interface IHashProvider {
  comparePasswords(password: string, hashedPassword: string): Promise<boolean>;
  hashPassword(password: string): Promise<string>;
}

export { IHashProvider };
