import express from 'express';
import {create, findAll} from '../controllers/zajController.js';

const zajrouter = express.Router();

zajrouter.post('/', create);
zajrouter.get('/', findAll);

export default zajrouter;