import express from 'express';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

const authRouter = express.Router();
import database from '../config/db';
import transporter from '../email/transporter';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

authRouter.post('/register', async (req: Request, res: Response) => {
   try {
      const { user_name, user_email, user_password } = req.body;

      if (!user_name || !user_email || !user_password) {
         return res.status(400).json('Missing required parameters');
      }
      const user = await database.query(
         `SELECT * FROM users WHERE user_email = $1`,
         [user_email]
      );

      if (user.rows.length > 0) {
         return res.status(401).json('User already exists');
      }

      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(user_password, salt);

      const newUser = await database.query(
         `INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3)`,
         [user_name, user_email, hash]
      );

      if (newUser.rowCount === 0) {
         return res.status(500).json('Error creating user');
      }

      transporter.sendMail(
         {
            from: 'briananthonyruff@gmail.com',
            to: user_email,
            subject:
               "Welcome Brian A. Ruff's Email List. Let's chill... I've got cookies!",
            html: `
                <html>
                  <head>
                    <title>Welcome Brian A. Ruff's Email List</title>
                  </head>
                  <body>
                    <h2></h2>Welcome to Brian A. Ruff's Email List!</h2>
                    <h4>Thank you for signing up ${user_name}</h4>
                    <img src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/155386170_10219591520884254_4960723221713159652_n.jpg?_nc_cat=104&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=auWfmecywbgAX_ad2c0&_nc_ht=scontent-atl3-1.xx&oh=8ca19e14632452a37d5401691d77e064&oe=60F09E89" alt="Brian Ruff in his car" width="300" height="300" style="border-radius: 50%; border: 1px solid black;" />
                    <p>Let's hang out sometime and talk about <em>life</em>.</p> 
                    <p>My number is <a href="tel:980-240-6927">980-240-6927</a></p>
                    <ol>
                        <li> My favortie color is <span style="color: #00ff00;">green</span>.<li/>
                        <li> I like to <a href="https://www.chess.com">Play Chess</a></li>
                        <li>I like to <a href="https://www.youtube.com">Watch/Make Videos on Youtube</a></li>
                        <li>Let <strong>me</strong> know what you think of my automatic email system after registering an account on my website, please!</li>
                    </ol>  
                    <p>My email is <a href="mailto:briananthonyruff@gmail.com">brff19@gmail.com</a></p>
                    <p>My LinkedIn is <a href="https://www.linkedin.com/in/brianaruff/">LinkedIn</a></p>
                    <p>My Twitter is <a href="https://twitter.com/brianARuff">@brianARuff</a></p>
                    <p>My Facebook is <a href="https://www.facebook.com/brian.ruff.102">Facebook</a></p>
                    <p>My GitHub is <a href="https://github.com/brianaruff">GitHub</a></p>
                    <p>My Youtube is <a href="https://www.youtube.com/channel/UCxb0mX3Wp6I9YSBngxpSULw">Youtube</a></p> 
                  </body>
                </html>`,
         },
         (err: Error | null, info: SMTPTransport.SentMessageInfo) => {
            if (err) {
               console.log(err);
            } else {
               console.log(info);
            }
         }
      );
      return res.status(200).json({ message: 'User created' });
   } catch (error) {
      return res.status(500).json(error.message);
   }
});

export default authRouter;
