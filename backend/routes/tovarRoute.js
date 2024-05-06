import express from 'express';
import { getAllProducts, findByCatigoryId,editProduct, deleteProduct } from '../controllers/tovarcontroller.js';
const tovarroute = express.Router();

tovarroute.get('/', getAllProducts); //list
tovarroute.get('/categories/:id', findByCatigoryId);
tovarroute.patch('/:id',editProduct);
tovarroute.delete('/:id', deleteProduct)

// tovarroute.post("/", Login);
//tovarroute.get("/", (req, res)=>{res.send("welco9m")});
// tovarroute.get("/", Login);
// tovarroute.patch("/", Login);
// tovarroute.delete("/", Logout);

export default tovarroute;
