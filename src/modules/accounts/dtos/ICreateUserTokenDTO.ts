interface ICreateUserTokenDTO {
  user_id: string;
  access_token: string;
  access_token_expires_date?: Date;
  refresh_token: string;
  refresh_token_expires_date?: Date;
}

export { ICreateUserTokenDTO };
