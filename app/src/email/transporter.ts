import 'dotenv/config';
import nodeMailer, { Transporter } from 'nodemailer';

const transporter: Transporter = nodeMailer.createTransport({
   from: 'briananthonyruff@gmail.com',
   service: 'Gmail',
   auth: {
      user: process.env.NM_USER,
      pass: process.env.NM_PASS,
   },
   port: 465,
   secure: true,
   host: 'smtp.gmail.com',
});

export default transporter;
