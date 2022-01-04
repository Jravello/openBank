import jwt from 'jwt-simple';
import { isUndefined } from 'underscore';

export const decodedJwt = (
  token: string,
  secret: string | undefined
): number | object | string | Array<number | object | string> => {
  if (!isUndefined(secret)) {
    return jwt.decode(token, secret);
  } else {
    return { error: 'El parametro Secret es undefined' };
  }
};
