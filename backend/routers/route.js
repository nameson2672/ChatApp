import  express  from 'express';
const router = express.Router();

import { createUser, getUser } from "../controllers/user.js";

router.route('/create').post(createUser);
router.route('/login').post(getUser);


export default router;