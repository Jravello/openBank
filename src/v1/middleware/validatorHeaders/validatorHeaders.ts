import { isUndefined } from 'underscore';
import { Validator } from '../../../interface/enum/validatorsJwt';
import { Request, Response, NextFunction } from 'express';
import { ServerResponses, Status } from '../../../interface/Server';
import { SECRET } from '../../../envConfig';
import { app } from '../../../.';

export const validatorHeader = (req: Request, res: Response, next: NextFunction) => {
  if (isUndefined(req.get(Validator.Key))) {
    return res
      .status(Status.ERROR_REQUEST_400)
      .json(ServerResponses.ERROR_REQUEST_400('Falta parametro Key'));
  }
  if (isUndefined(req.get(Validator.Secret))) {
    return res
      .status(Status.ERROR_REQUEST_400)
      .json(ServerResponses.ERROR_REQUEST_400('Falta parametro Secret'));
  }
  if (!(!isUndefined(req.get(Validator.Secret)) && req.get(Validator.Secret) === SECRET)) {
    return res
      .status(Status.ERROR_UNAUTHORIZED_401)
      .json(
        ServerResponses.ERROR_UNAUTHORIZED_401(
          'Fallo en autorizacion de Servidor por parametro Secret'
        )
      );
  }
  if (
    !(!isUndefined(req.get(Validator.Key)) && req.get(Validator.Key) === app.get(Validator.Key))
  ) {
    return res
      .status(Status.ERROR_UNAUTHORIZED_401)
      .json(
        ServerResponses.ERROR_UNAUTHORIZED_401('Fallo en autorizacion de Datos por parametro Key')
      );
  }
  next();
};
