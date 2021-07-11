import 'dotenv/config';
import nodeMailer, { Transporter } from 'nodemailer';

const transporter: Transporter = nodeMailer.createTransport({
   from: 'briananthonyruff@protonmail.com',
   auth: {
      user: process.env.NM_USER,
      pass: process.env.NM_PASS,
   },
   port: 1025,
   secure: false,
   host: '127.0.0.1',
   debug: false,
   logger: true,
   tls: {
      rejectUnauthorized: false,
   },
});

export default transporter;
