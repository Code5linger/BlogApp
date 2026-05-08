import { NextFunction, Request, Response, Router } from 'express';
import { PostController } from './post.controller.js';

const router = Router();

// !---Middleware Hit-----------------------------------
const auth = () => {
  return async (req: Request, res: Response, next: NextFunction) => {
    console.log('Middleware Hit 💥');
    next();
  };
};

router.post('/', auth(), PostController.createPost);

export const PostRouter = router;
