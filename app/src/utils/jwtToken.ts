import 'dotenv/config';
import jwt from 'jsonwebtoken';

class JWT {
   generate(user_id: number) {
      const payload = {
         user: user_id,
      };
      return jwt.sign(payload, process.env.JWT_SECRET as string, {
         expiresIn: '1h',
      });
   }
}

export const token = new JWT();
