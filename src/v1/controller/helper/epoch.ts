import { Request, Response } from 'express';
import { isUndefined } from 'underscore';
import { fromDateToEpoch } from '../../../helpers/epoch/fromDateToEpoch';
import { fromEpochToDate } from '../../../helpers/epoch/fromEpochToDate';
import { getDateEpoch } from '../../../helpers/epoch/getDateEpoch';
import { ServerResponses, Status } from '../../../interface/Server';

export const getEpoch = (req: Request, res: Response) => {
  const epoch = getDateEpoch();
  return res.status(Status.OK_200).send(ServerResponses.OK_200(epoch));
};
export const getDateByEpoch = (req: Request, res: Response) => {
  if (isUndefined(req.params.epoch)) {
    return res
      .status(Status.ERROR_REQUEST_400)
      .send(ServerResponses.ERROR_REQUEST_400('Falta Parametro Epoch'));
  } else {
    const date = fromEpochToDate(Number(req.params.epoch));
    return res.status(Status.OK_200).send(ServerResponses.OK_200(date));
  }
};
export const getEpochByDate = (req: Request, res: Response) => {
  if (isUndefined(req.params.date)) {
    return res
      .status(Status.ERROR_REQUEST_400)
      .send(ServerResponses.ERROR_REQUEST_400('Falta Parametro Date'));
  } else {
    const epoch = fromDateToEpoch(new Date(req.params.date));
    return res.status(Status.OK_200).send(ServerResponses.OK_200(epoch));
  }
};
