import { celebrate, Joi, Segments } from 'celebrate';

class UpdatePasswordValidation {
  public body = celebrate({
    [Segments.BODY]: {
      currentPassword: Joi.string().required(),
      password: Joi.string().required(),
      confirmPassword: Joi.string().required(),
    },
  });
}
export { UpdatePasswordValidation };
