import { Router } from "express";
import { addUser ,getUsers,getUser} from "../controllers/user.js";

const router = Router();

router.post('/users',addUser);
router.get('/users',getUsers);
router.get('/users/:id',getUser)

export default router;