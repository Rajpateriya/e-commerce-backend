import express from 'express'
const router = express.Router()

import { addOrderItems,getOrderById,updateOrdeToPaid ,getOrders,getMyOrders,updateOrdeToDelivered} from '../controllers/orderController.js'

import {protect , admin} from '../middlewares/authMiddleware.js'

router.route('/').post(protect, addOrderItems).get(protect,admin ,getOrders)
router.route('/myorders').get(protect , getMyOrders)

router.route('/:id').get(protect ,getOrderById)
router.route('/:id/pay').put(protect , updateOrdeToPaid)
router.route('/:id/deliver').put(protect,admin, updateOrdeToDelivered)

export default router