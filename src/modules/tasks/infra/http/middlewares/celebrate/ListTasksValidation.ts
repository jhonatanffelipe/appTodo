import { celebrate, Joi, Segments } from 'celebrate';

class ListTasksValidation {
  public query = celebrate({
    [Segments.QUERY]: {
      date: Joi.date().required(),
      type: Joi.string().required().valid('D', 'M', 'W', 'Y'),
    },
  });
}

export { ListTasksValidation };
