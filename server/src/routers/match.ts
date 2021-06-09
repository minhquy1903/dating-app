import express from 'express';

import Match from '../service/match';

const router = express.Router();

router.post('/like', Match.like);

export default router;
