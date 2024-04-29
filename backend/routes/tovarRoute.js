import express from 'express';
import { getAllProducts, findByCatigoryId } from '../controllers/tovarcontroller.js';
const tovarroute = express.Router();

tovarroute.get('/', getAllProducts); //list
tovarroute.get('/categories/:id', findByCatigoryId);

// tovarroute.post("/", Login);
//tovarroute.get("/", (req, res)=>{res.send("welco9m")});
// tovarroute.get("/", Login);
// tovarroute.patch("/", Login);
// tovarroute.delete("/", Logout);

export default tovarroute;
