import { Request, Response } from 'express';

import MatchList from '../model/MatchList';

export default {
  like: async (req: Request, res: Response) => {
    const userId: string = req.body.user_id;
    const targetUserId: string = req.body.target_id;

    try {
      const listMatch: any = await MatchList.findOne(
        {
          _id: targetUserId,
        },
        { list_like: 1 },
      );

      if (listMatch.list_like.includes(userId)) {
        await MatchList.updateOne(
          { _id: userId },
          {
            $push: { list_match: targetUserId },
          },
        );
        await MatchList.updateOne(
          { _id: targetUserId },
          {
            $push: { list_match: userId },
          },
        );
        return res.status(200).json({ success: 'Matched' });
      }

      await MatchList.updateOne(
        { _id: userId },
        {
          $push: { list_like: targetUserId },
        },
      );

      return res.status(200).json({ success: 'push like' });
    } catch (error) {
      return res.status(500).json({ success: false, error: error });
    }
  },
  dislike: async (req: Request, res: Response) => {},
  getListMatch: async (req: Request, res: Response) => {
    const userId: string = req.params._id;

    try {
      const { list_match } = await MatchList.findOne({ _id: userId });
      return res.status(200).json({ success: true, data: list_match });
    } catch (error) {
      return res.status(500).json({ success: false, error: error });
    }
  },
};
