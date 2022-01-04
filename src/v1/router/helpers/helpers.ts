import { Router } from 'express';
import epochRoutes from './epoch/epoch';

const helpersRoutes: Router = Router();

helpersRoutes.use('/iat', epochRoutes);

export default helpersRoutes;
