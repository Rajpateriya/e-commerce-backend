import express from 'express'
const router = express.Router();
import {protect , admin} from '../middlewares/authMiddleware.js'
import { authUsers , registerUser, updateUser ,getUser , deleteUser } from '../controllers/userControllers.js'

router.route('/').post(registerUser)
.get(  getUser)
router.post('/login' ,authUsers)
router.route('/profile').get(protect, getUserProfile).put(product , updateUserProfile)
router.route('/:id')
.delete( deleteUser)
.get(protect , admin , getUserById)
.put(updateUser)


export default router