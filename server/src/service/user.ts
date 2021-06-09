import { Request, Response } from 'express';

import User from '../model/User';
import ListMatch from '../model/MatchList';

export default {
  createUser: (req: Request, res: Response) => {
    const user = {
      phone: req.body.phone,
      name: req.body.name,
      gender: req.body.gender,
    };

    try {
      const newUser = new User(user);
      newUser.save().then((userInfo: any) => {
        const listMatch = new ListMatch({
          _id: userInfo._id,
        });
        listMatch.save();
        return res.status(200).json({ data: userInfo });
      });
    } catch (error) {
      return res.status(500).json({ error: error });
    }
  },
};
