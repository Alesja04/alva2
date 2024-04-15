import express from "express";

const tovarroute = express.Router();

tovarroute.post("/", Login);
tovarroute.get("/", Login);
tovarroute.get("/", Login);
tovarroute.patch("/", Login);
tovarroute.delete("/", Logout);

export default tovarroute;
