import 'dotenv/config';
import nodeMailer, { Transporter } from 'nodemailer';

const transporter: Transporter = nodeMailer.createTransport({
   from: 'briananthonyruff@gmail.com',
   auth: {
      user: process.env.NM_USER,
      pass: process.env.NM_PASS,
   },
   service: 'Gmail',
   port: 465,
   secure: false,
   host: 'smtp.gmail.com',
   debug: false,
   logger: true,
   tls: {
      rejectUnauthorized: false,
   },
});

export default transporter;
