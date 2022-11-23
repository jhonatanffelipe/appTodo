interface ICreateUserTokenDTO {
  userId: string;
  accessToken: string;
  accessTokenExpiresDate?: Date;
  refreshToken: string;
  refreshTokenExpiresDate?: Date;
}

export { ICreateUserTokenDTO };
