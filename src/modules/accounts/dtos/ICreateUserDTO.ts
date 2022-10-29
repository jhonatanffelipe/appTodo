interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  avatar_url?: string;
}

export { ICreateUserDTO };
