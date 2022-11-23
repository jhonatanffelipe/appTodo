interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  avatar?: string;
}

export { ICreateUserDTO };
