import { Router } from "express";
import { addPost,usersPosts,userPosts,deletePost,updatePost } from "../controllers/post.js";

const router = Router();

router.post('/posts',addPost);
router.get('/posts',usersPosts);
router.get('/posts/:id',userPosts)
router.put('/posts/:id',updatePost);
router.delete('/posts/:id',deletePost)

export default router;