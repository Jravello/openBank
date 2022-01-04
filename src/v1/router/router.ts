import { Router, Request, Response } from 'express';
import ioclient from 'socket.io-client';
import { apis } from '../..';
import { ServerResponses, Status } from '../../interface/Server';
import helpersRoutes from './helpers/helpers';
import liveRouter from './live/live';
import v1Router from './v1';

const mainRouter: Router = Router();

mainRouter.use('/v1', v1Router);
mainRouter.use('/isLive', liveRouter);
mainRouter.use('/helpers', helpersRoutes);
mainRouter.get('/status', (req: Request, res: Response) => {
  return res.status(Status.OK_200).json(ServerResponses.OK_200(apis));
});
mainRouter.get('/statusTable', (req: Request, res: Response) => {
  res.render('index', {
    title: 'Estado de APIs',
    message: 'Estados',
    data: apis,
    copy: '© All Rigths Reserved 🕷 ',
  });
});

export default mainRouter;
