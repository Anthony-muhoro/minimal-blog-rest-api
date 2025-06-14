import { Router } from "express";
import { addPost,usersPosts,userPosts,deletePost,updatePost, userPost } from "../controllers/post.js";

const router = Router();

router.post('/posts',addPost);
router.get('/posts',usersPosts);
router.get('/posts/:id',userPosts)
router.get('/post/:id',userPost)
router.put('/posts/:id',updatePost);
router.delete('/posts/:id',deletePost)

export default router;