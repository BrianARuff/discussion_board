import 'dotenv/config';
import nodeMailer, { Transporter } from 'nodemailer';

const transporter: Transporter = nodeMailer.createTransport({
   from: 'briananthonyruff@yahoo.com',
   service: 'yahoo',
   auth: {
      user: process.env.NM_USER,
      pass: process.env.NM_PASS,
   },
   port: 465,
   secure: true,
   host: 'smtp.mail.yahoo.com',
   debug: false,
   logger: true,
});

export default transporter;
