import { celebrate, Joi, Segments } from 'celebrate';

class CreateTaskValidation {
  public body = celebrate({
    [Segments.BODY]: {
      categoryId: Joi.string().required(),
      title: Joi.string().required(),
      description: Joi.string().required(),
      when: Joi.date().required(),
    },
  });
}

export { CreateTaskValidation };
