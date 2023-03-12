interface ICreateUserTokenDTO {
  userId: string;
  accessToken: string;
  accessTokenExpiresDate?: Date;
}

export { ICreateUserTokenDTO };
