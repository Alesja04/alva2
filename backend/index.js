import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
//import dotenv from 'dotenv';
import db from './config/database.js';
import router from './routes/index.js';

// import User from './models/user.js';
// import bcrypt from 'bcrypt';

//import userRoute from './routes/userRoute.js';
// import categoryModel from "./models/category.js"
// import tovarModel from "./models/tovar.js"
// import klassidModel from "./models/klassid.js"

//import { where } from 'sequelize';

//dotenv.config();

const app = express();

try {
  await db.authenticate();
  console.log('Database connected...');
  //??
  // await db.sync();
  // const password = await bcrypt.hash(process.env.DEFAULT_ADMIN_PASSWORD, 8);
  // await User.findOrCreate({
  //   where: { id: 1 },
  //   defaults: { name: 'admin', password: password, role: 'admin' },
  // });
  //??
} catch (error) {
  console.error('Connection error:');
}

//db.sync();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());

//app.use('/user', userRoute);
app.use('/', router);

app.listen(5000, () => console.log('server running at port 5000'));
