import { celebrate, Joi, Segments } from 'celebrate';

class CreateUserValidation {
  public body = celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
      confirmPassword: Joi.string().required(),
    },
  });
}

export { CreateUserValidation };
