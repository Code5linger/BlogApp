import express, { Application, Request, Response } from 'express';
import { PostRouter } from './modules/post/post.router.js';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth.js';
import cors from 'cors';

const app: Application = express();

// Auth — must be before express.json()
app.all('/api/auth/*splat', toNodeHandler(auth));

app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.APP_URL || 'http://localhost:4000',
    credentials: true,
  }),
);
app.use(express.json());

// Basic route
app.get('/', (req: Request, res: Response) => {
  console.log('Hello World!');
  res.send('Hello World!');
});

app.use('/posts', PostRouter);

export default app;
