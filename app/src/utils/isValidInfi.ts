import { Response, Request, NextFunction } from 'express';
import { validate_async } from 'email-validator';

export default async function (
   req: Request,
   res: Response,
   next: NextFunction
) {
   const { user_email, user_name, user_password } = req.body;

   function validEmail(userEmail: string) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
   }

   if (req.path === '/register') {
      if (![user_email, user_name, user_password].every(Boolean)) {
         return res.status(403).json('Missing Credentials');
      } else if (!validEmail(user_email)) {
         return res.status(401).json('Invalid Email');
      }
   } else if (req.path === '/login') {
      if (![user_email, user_password].every(Boolean)) {
         return res.status(401).json('Missing Credentials');
      } else if (!validEmail(user_email)) {
         return res.status(401).json('Invalid Email');
      }
   }

   next();
}
