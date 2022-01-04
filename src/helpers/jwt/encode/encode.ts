import jwt from 'jwt-simple';

export const encodedJwt = (
  payload: number | object | string | Array<number | object | string>,
  secret: string
): string => {
  return jwt.encode(payload, secret);
};
