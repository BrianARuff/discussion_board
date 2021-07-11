import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import authRouter from '../routes/auth';

function middleware(app: express.Application) {
   app.use(express.json()),
      app.use(cors()),
      app.use(morgan('dev')),
      app.use(helmet()),
      app.use('/api/auth', authRouter);
}

export default middleware;
