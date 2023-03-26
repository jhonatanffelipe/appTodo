export default interface IResponseUserDTO {
  name: string;
  email: string;
  avatar_url: string;
  isAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
