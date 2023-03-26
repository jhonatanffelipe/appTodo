export default interface IResponseUserDTO {
  name: string;
  email: string;
  avatarUrl: string;
  isAdmin: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
