import express from 'express';
import {create, findAll} from '../controllers/klassController.js';

const klassrouter = express.Router();

 klassrouter.post('/', create);
 klassrouter.get('/', findAll);

export default klassrouter;