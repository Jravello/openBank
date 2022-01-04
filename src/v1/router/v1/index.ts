import { Router } from 'express';
import { postDecodeToken } from '../../controller/auth/postDecodeToken';
import { postTokenAuth } from '../../controller/auth/postTokenAuth';
import { validatorHeader } from '../../middleware/validatorHeaders/validatorHeaders';

const v1Router: Router = Router();

v1Router.post('/auth', validatorHeader, postTokenAuth);
v1Router.post('/decode', validatorHeader, postDecodeToken);

export default v1Router;
