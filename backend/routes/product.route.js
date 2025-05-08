import express from 'express';

import { deleteProduct, getProducts, saveProduct, showProduct, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();


router.get('/', getProducts);
router.post('/', saveProduct);
router.get('/show/:id', showProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;