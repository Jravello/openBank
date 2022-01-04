import { Router } from 'express';
import { getDateByEpoch, getEpoch, getEpochByDate } from '../../../controller/helper/epoch';

const epochRoutes: Router = Router();

epochRoutes.get('/', getEpoch);
epochRoutes.get('/:date', getDateByEpoch);
epochRoutes.get('/:epoch', getEpochByDate);

export default epochRoutes;
