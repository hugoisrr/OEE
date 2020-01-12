import express, { Application } from 'express';
import morgan from 'morgan';

const app: Application = express();

import authRoutes from './routes/auth';

// settings
app.set('port', 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api/auth', authRoutes);

export default app;
