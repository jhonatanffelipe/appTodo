import { celebrate, Joi, Segments } from 'celebrate';

class UpdateTaskValidation {
  public body = celebrate({
    [Segments.BODY]: {
      categoryId: Joi.string().uuid().required(),
      title: Joi.string().required(),
      description: Joi.string().required(),
      when: Joi.date().required(),
      done: Joi.boolean().required(),
    },
  });

  public params = celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  });
}

export { UpdateTaskValidation };
