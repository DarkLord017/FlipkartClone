import express from 'express';
import { userSignup } from '../controller/user-controller.js';
import { UserLogin } from '../controller/user-controller.js';

import { getProducts } from '../controller/product-controller.js';

const router = express.Router();

router.post('/signup', userSignup)
router.post('/login', UserLogin)

router.get('/products', getProducts)

export default router;