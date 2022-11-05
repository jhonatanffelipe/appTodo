import { celebrate, Joi, Segments } from 'celebrate';

class ListTaskByIdValidation {
  public params = celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  });
}

export { ListTaskByIdValidation };
