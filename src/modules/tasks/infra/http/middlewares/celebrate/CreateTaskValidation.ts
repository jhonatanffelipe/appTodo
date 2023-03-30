import { celebrate, Joi, Segments } from 'celebrate';

class CreateTaskValidation {
  public body = celebrate({
    [Segments.BODY]: {
      categoryId: Joi.string().uuid().required(),
      title: Joi.string().required(),
      description: Joi.string().required(),
      when: Joi.date().required(),
      done: Joi.boolean().required().allow(true, false),
    },
  });
}

export { CreateTaskValidation };
