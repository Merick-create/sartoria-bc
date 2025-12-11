import {Router} from 'express';
import RequestRouter from './request/router-request';

const router = Router();
router.use('/requests', RequestRouter);

export default router;