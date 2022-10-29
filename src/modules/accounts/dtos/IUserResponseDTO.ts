interface IUserResponseDTO {
  email: string;
  name: string;
  id?: string;
  is_admin?: boolean;
  avatar_url?: string;
  created_at?: Date;
  updated_at?: Date;
}

export { IUserResponseDTO };
