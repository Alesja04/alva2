import express from "express";
import categoryroute from "./categoryRoute.js"
import tovarroute from "./tovarRoute.js"
import userrouter from "./userRoute.js"
import zajroute from "./zajroute.js"

const router = express.Router();

router.use("/products", tovarroute)

export default router