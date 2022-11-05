import { celebrate, Joi, Segments } from 'celebrate';

class DeleteTaskValidation {
  public params = celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  });
}

export { DeleteTaskValidation };
