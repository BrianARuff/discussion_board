import 'dotenv/config';
import nodeMailer, { Transporter } from 'nodemailer';

const transporter: Transporter = nodeMailer.createTransport({
   from: 'briananthonyruff@proton.com',
   service: 'proton',
   auth: {
      user: process.env.NM_USER,
      pass: process.env.NM_PASS,
   },
   port: 465,
   secure: true,
   host: 'smtp.mail.proton.com',
   debug: false,
   logger: true,
});

export default transporter;
