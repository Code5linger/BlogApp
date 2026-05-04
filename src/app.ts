import express, { Application, Request, Response } from 'express';
import { PostRouter } from './modules/post/post.router.js';

const app: Application = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Post Route
app.use('/posts', PostRouter);

// Basic route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello');
});

export default app;
