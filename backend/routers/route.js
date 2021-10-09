import  express  from 'express';
const router = express.Router();

// User controllers
import { createUser, getUser } from "../controllers/user.js";

// Convertation controller
import {
    getConvertationsBetweenUsers, getConvertationWithId, newConvertation
} from '../controllers/convertation.js'

//Message controller import
import { addMessage, getMessage } from '../controllers/message.js';

router.route('/create').post(createUser);
router.route('/login').post(getUser);

// Convwertation routes
router.route("/convertation").post(newConvertation);
router.route("/convertation/:userId").get(getConvertationWithId);
router
  .route("/convertation/:firstUserId/:secondUserId")
  .get(getConvertationsBetweenUsers);

  // Messages routes
router.route('/messages').post(addMessage);
router.route("/messages/:conversationId").get(getMessage);


export default router;
