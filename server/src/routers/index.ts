import express from 'express';

import Match from './match';
import User from './user';
const router = express.Router();

router.use('/match', Match);
router.use('/user', User);

export default router;
