import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import api from './api';
import shutter from './helpers/shutter';
import log from './helpers/log';

const app = express();
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: false }));
app.use(cors({ maxAge: 86400 }));
app.set('trust proxy', 1);
app.use('/', api);
app.use('/shutter', shutter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => log.info(`Started on: http://localhost:${PORT}`));
