import { Request, Response } from 'express';
import { isUndefined } from 'underscore';
import { generationToken } from '../../../helpers/jwt/generation/generation';
import { Times, Validator } from '../../../interface/enum/validatorsJwt';
import { ServerResponses, Status } from '../../../interface/Server';

export const postTokenAuth = (req: Request, res: Response) => {
  if (isUndefined(req.body.emailEncode)) {
    return res
      .status(Status.ERROR_REQUEST_400)
      .json(ServerResponses.ERROR_REQUEST_400('Falta parametro emailEncode'));
  }
  const data = {
    emailEncode: req.body.emailEncode,
  };
  const token = generationToken(Times.Min5, req.get(Validator.Key), data);
  return res.status(Status.CREATED_201).json(ServerResponses.CREATED_TOKEN_201(token));
};
