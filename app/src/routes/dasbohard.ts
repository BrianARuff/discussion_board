import express from 'express';
import database from '../config/db';
import authorization from '../utils/authorization';
import { Response } from 'express';

const dashBoardRouter = express.Router();

dashBoardRouter.get(
   '/',
   authorization as any,
   async (req: any, res: Response) => {
      try {
         const user = await database.query(
            'SELECT user_id, user_name, user_email, user_created_at, user_updated_at FROM users WHERE user_id = $1',
            [req.user]
         );
         res.json(user.rows[0]);
      } catch (error) {
         res.status(500).json(error);
      }
   }
);

export default dashBoardRouter;
