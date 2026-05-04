import { Router } from 'express';
import { PostController } from './post.controller.js';

const router = Router();

router.post('/', PostController.createPost);

export const PostRouter = router;
