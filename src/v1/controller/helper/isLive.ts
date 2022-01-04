import { Request, Response } from 'express';
import { ServerResponses, Status } from '../../../interface/Server';

export const getIsLive = (req: Request, res: Response) => {
  try {
    return res.status(Status.OK_200).send(ServerResponses.IS_LIVE_200());
  } catch (err) {
    console.log(err);
    return res.status(Status.ERROR_REQUEST_400).send(ServerResponses.ERROR_REQUEST_400(err));
  }
};
