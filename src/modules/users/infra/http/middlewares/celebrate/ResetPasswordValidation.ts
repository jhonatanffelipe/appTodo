import { celebrate, Joi, Segments } from 'celebrate';

class ResetPasswordValidation {
  public body = celebrate({
    [Segments.BODY]: {
      token: Joi.string().required(),
      password: Joi.string().required(),
      confirmPassword: Joi.string().required(),
    },
  });
}
export { ResetPasswordValidation };
