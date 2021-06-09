import express from 'express';

import User from '../service/user';

const router = express.Router();

router.post('/', User.createUser);

export default router;
