import { celebrate, Joi, Segments } from 'celebrate';

class RefreshTokenValidation {
  public body = celebrate({
    [Segments.BODY]: {
      refresh_token: Joi.string().required(),
    },
  });
}

export { RefreshTokenValidation };
