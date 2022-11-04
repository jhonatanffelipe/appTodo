import { celebrate, Joi, Segments } from 'celebrate';

class CreateTaskValidation {
  public bodyCreate = celebrate({
    [Segments.BODY]: {
      categoryId: Joi.string().required(),
      title: Joi.string().required(),
      description: Joi.string().required(),
      when: Joi.date().required(),
    },
  });

  public queryList = celebrate({
    [Segments.QUERY]: {
      date: Joi.date().required(),
      type: Joi.string().required().valid('D', 'M', 'W', 'Y'),
    },
  });
}

export { CreateTaskValidation };
