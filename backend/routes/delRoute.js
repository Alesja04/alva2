import express from 'express';
import {create, findAll} from '../controllers/delController.js';

const delrouter = express.Router();

 delrouter.post('/', create);
 delrouter.get('/', findAll);

export default delrouter;