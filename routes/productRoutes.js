import express from 'express'
const router   = express.Router();


import {getProducts, getProductById , deleteProduct , updateProduct ,createProduct , createProductReview , getTopProducts } from '../controllers/productControllers.js'

router.route('/').get(getProducts).post( createProduct)
router.route('/:id/reviews').post( createProductReview)
router.route('/top').get(getTopProducts)
router.route('/:id').get(getProductById).delete(deleteProduct).put( updateProduct)

export default router;