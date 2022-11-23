import { celebrate, Joi, Segments } from 'celebrate';

class AuthenticateValidation {
  public body = celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      password: Joi.string().required(),
    },
  });
}

export { AuthenticateValidation };
