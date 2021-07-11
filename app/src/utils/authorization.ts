import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface IUserAuthRequest extends Request {
   user: string;
}

const authorization = (
   req: IUserAuthRequest,
   res: Response,
   next: NextFunction
) => {
   try {
      const token = req.header('token');

      if (!token) return res.status(403).json({ error: 'Missing token' });

      const payload: any = jwt.verify(token, process.env.JWT_SECRET as string);

      req.user = payload.user;
   } catch (error) {
      return res.status(403).json('Not Authorized');
   }
   next();
};

export default authorization;
