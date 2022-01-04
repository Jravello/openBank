import { Router, Request, Response } from 'express';
import { ServerResponses, Status } from '../../../interface/Server';
import { getIsLive } from '../../controller/helper/isLive';

const liveRouter: Router = Router();

liveRouter.get('/', getIsLive);

export default liveRouter;
