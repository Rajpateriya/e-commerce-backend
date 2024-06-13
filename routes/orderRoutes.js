import express from 'express'
const router = express.Router()

import { addOrderItems,getOrderById,updateOrdeToPaid ,getOrders} from '../controllers/orderController.js'

import {protect , admin} from '../middlewares/authMiddleware.js'

router.route('/').post(protect, addOrderItems).get(protect,admin ,getOrders)
router.route('/:id/pay').put(protect , updateOrdeToPaid)

export default router