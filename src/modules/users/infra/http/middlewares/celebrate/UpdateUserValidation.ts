import { celebrate, Joi, Segments } from 'celebrate';

class UpdateUserValidation {
  public body = celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      currentPassword: Joi.string().required().allow(null, ''),
      password: Joi.string().required().allow(null, ''),
      confirmPassword: Joi.string().required().allow(null, ''),
    },
  });
}
export { UpdateUserValidation };
