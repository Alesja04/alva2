import express from "express";
import {findByCatigoryId} from "../controllers/tovarcontroller.js"
const tovarroute = express.Router();

// tovarroute.post("/", Login);
tovarroute.get("/", (req, res)=>{res.send("welco9m")});
// tovarroute.get("/", Login);
tovarroute.get("/categories/:id", findByCatigoryId);
// tovarroute.patch("/", Login);
// tovarroute.delete("/", Logout);

export default tovarroute;
