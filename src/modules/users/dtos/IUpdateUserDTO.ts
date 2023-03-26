export default interface IUpdateUserDTO {
  id: string;
  name: string;
  email: string;
  currentPassword: string;
  password: string;
  confirmPassword: string;
}
