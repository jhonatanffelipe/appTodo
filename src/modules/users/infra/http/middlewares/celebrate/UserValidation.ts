import { celebrate, Joi, Segments } from 'celebrate';

class UserValidation {
  public bodyCreateUser = celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      confirmPassword: Joi.string().required(),
      isAdmin: Joi.boolean().required(),
      isActive: Joi.boolean().required(),
      userTypeId: Joi.string().uuid().required().allow(null),
    },
  });

  public paramsId = celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  });

  public bodyUpdateUser = celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      isAdmin: Joi.boolean(),
      isActive: Joi.boolean(),
      userTypeId: Joi.string().uuid(),
    },
  });
}

export { UserValidation };
