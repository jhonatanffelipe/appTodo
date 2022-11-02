import { celebrate, Joi, Segments } from 'celebrate';

class RefreshTokenValidation {
  public body = celebrate({
    [Segments.BODY]: {
      refreshToken: Joi.string().required(),
    },
  });
}

export { RefreshTokenValidation };
