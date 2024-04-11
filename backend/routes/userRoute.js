import express from 'express';
import {Login, Logout} from '../controllers/userController.js';
// import { verifyToken } from '../middleware/verifyToken.js';
// import { refreshToken } from '../controllers/refreshToken.js';
const userrouter = express.Router();

userrouter.post('/users', Login);
userrouter.delete('/logout', Logout);

export default userrouter;