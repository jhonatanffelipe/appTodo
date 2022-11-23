interface IUpdatePasswordDTO {
  userId: string;
  currentPassword: string;
  password: string;
  confirmPassword: string;
}

export { IUpdatePasswordDTO };
