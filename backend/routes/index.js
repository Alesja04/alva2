import express from 'express';
//import categoryroute from './categoryRoute.js';
import tovarroute from './tovarRoute.js';
import userrouter from './userRoute.js';
import delrouter from './delRoute.js';
import klassrouter from './klassRoute.js';

const router = express.Router();

router.use('/products', tovarroute);
router.use('/delivery', delrouter);
router.use('/klassid', klassrouter);

//router.use('/category', categoryroute);
router.use('/users', userrouter);

export default router;
