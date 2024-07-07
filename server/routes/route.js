import express from 'express';
import { userSignup } from '../controller/user-controller.js';
import { UserLogin } from '../controller/user-controller.js';

import { getProducts, getProductById } from '../controller/product-controller.js';

const router = express.Router();

router.post('/signup', userSignup)
router.post('/login', UserLogin)

router.get('/products', getProducts)
router.get('/product/:id', getProductById)
export default router;