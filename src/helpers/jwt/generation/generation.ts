import { Times, Validator } from '../../../interface/enum/validatorsJwt';
import jwt from 'jsonwebtoken';
import { isUndefined } from 'underscore';

export const generationToken = (
  time: Times,
  key: string | undefined,
  data: number | object | string | Array<number | object | string>
) => {
  if (!isUndefined(key)) {
    const payload = {
      checkToken: true,
      data: data,
    };
    return jwt.sign({ payload }, key, {
      expiresIn: time,
    });
  } else {
    return { error: 'El parametro Secret es undefined' };
  }
};
