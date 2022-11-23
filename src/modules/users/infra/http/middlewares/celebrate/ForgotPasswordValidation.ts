import { celebrate, Joi, Segments } from 'celebrate';

class ForgotPasswordValidation {
  public body = celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
    },
  });
}
export { ForgotPasswordValidation };
