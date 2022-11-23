import 'reflect-metadata';

import dotenv from 'dotenv';
dotenv.config();

import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import { errors } from 'celebrate';

import { AppError } from '@shared/errors/AppError';
import createConnection from './typeorm/index';
import { routes } from './routes/index.routes';
import '../../container';
import upload from '@config/upload';
import { ErrorHandler } from '@shared/errors/ErrorHandler';

createConnection();
const app = express();

app.use(express.json());

app.use('/avatar', express.static(`${upload.tmpFolder}/avatar`));

app.use(routes);
app.use(errors());

app.use(ErrorHandler);

export { app };
