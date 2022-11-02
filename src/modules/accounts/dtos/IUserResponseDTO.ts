interface IUserResponseDTO {
  email: string;
  name: string;
  id?: string;
  isAdmin?: boolean;
  avatar?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export { IUserResponseDTO };
