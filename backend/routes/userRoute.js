import express from 'express';
import { Login } from '../controllers/userController.js'; //, Logout
import { loginValidation } from '../validations/validation.js';
import { handleValidationErrors } from '../validations/handleValidationErrors.js';
//import { checkAuth } from '../validations/checkAuth.js';
const userrouter = express.Router();

// userrouter.post('/users', Login);
// userrouter.delete('/logout', Logout);
userrouter.post('/auth/login', loginValidation, handleValidationErrors, Login); //login

export default userrouter;
