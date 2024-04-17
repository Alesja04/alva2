import express from 'express';
import db from './config/database.js';
//import userRoute from './routes/userRoute.js';
import router from './routes/index.js';
import categoryModel from "./models/category.js"
import tovarModel from "./models/tovar.js"

import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

try {
  await db.authenticate();
  await db.sync();
}catch(error) {
  console.error('Connection error:');
}

//db.sync();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());

//app.use('/user', userRoute);
app.use('/api', router);

app.listen(5000, ()=> console.log('server running at port 5000'));

