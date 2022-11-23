export default interface IResponseUserDTO {
  name: string;
  email: string;
  avatar: string;
  isAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
