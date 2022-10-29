import 'reflect-metadata';

import dotenv from 'dotenv';
dotenv.config();

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { errors } from 'celebrate';

import { AppError } from '../../errors/AppError';
import createConnection from '../typeorm/index';
import { routes } from './routes/index.routes';
import '../../container';

createConnection();
const app = express();

app.use(express.json());

app.use(routes);
app.use(errors());

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  });

  next();
});

export { app };
