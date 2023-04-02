import 'reflect-metadata';

import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import 'express-async-errors';
import { errors } from 'celebrate';

import createConnection from './typeorm/index';
import '@shared/container';
import { routes } from './routes/index.routes';
import upload from '@config/upload';
import { ErrorHandler } from '@shared/errors/ErrorHandler';

createConnection();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/avatar', express.static(`${upload.tmpFolder}/avatar`));
app.use('/category', express.static(`${upload.assetsFolder}/category`));

app.use(routes);
app.use(errors());

app.use(ErrorHandler);

export { app };
