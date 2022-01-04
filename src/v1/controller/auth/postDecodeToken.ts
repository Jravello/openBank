import { isUndefined } from 'underscore';
import { decodedJwt } from '../../../helpers/jwt/decode/decode';
import { Status, ServerResponses } from '../../../interface/Server';
import { Request, Response } from 'express';
import { Validator } from '../../../interface/enum/validatorsJwt';

export const postDecodeToken = (req: Request, res: Response) => {
  if (isUndefined(req.body.token)) {
    return res
      .status(Status.ERROR_REQUEST_400)
      .json(ServerResponses.ERROR_REQUEST_400('Falta parametro token'));
  }
  const token = decodedJwt(req.body.token, req.get(Validator.Key));
  return res.status(Status.OK_200).json(ServerResponses.CREATED_201(token));
};
