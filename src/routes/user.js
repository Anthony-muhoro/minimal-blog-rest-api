import { Router } from "express";
import { addUser ,getUsers,getUser} from "../controllers/user.js";

const router = Router();

router.post('/user',addUser);
router.get('/users',getUsers);
router.get('/user/:id',getUser)

export default router;