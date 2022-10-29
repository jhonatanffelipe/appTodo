import { celebrate, Joi, Segments } from 'celebrate';

class ListUsersByIdValidation {
  public params = celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  });
}

export { ListUsersByIdValidation };
