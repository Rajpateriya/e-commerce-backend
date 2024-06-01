import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import generateToken from '../utils/generateToken.js'


const authUsers = asyncHandler(async(req,res)=>{
    const {email , password} = req.body

    const user = await User.findOne({email})
    if(user && (await user.matchPassword(password))){

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    }else{
        res.status(401)
        throw new Error("Invalid email and password")
    }
})


const registerUser = asyncHandler(async(req,res)=>{
    const {name , email , password} = req.body
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error("User already exist")
    }
    const user = await User.create({name ,email , password})
    if(user){
        res.status(200).json({
            _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("Invalid user Data")
    }
})

const getUser = asyncHandler(async(req,res)=>{
    const users = await User.find({})
    res.json(users)
})

const updateUser = asyncHandler(async(req,res)=>{
 
    const user = await User.findById(req.params.id)

    if (user) {
        user.name =req.body.name || user.name
        user.email = req.body.email || user.email
        user.isAdmin=req.body.isAdmin || user.isAdmin
        const updatedUser = await user.save()
        res.json({ 
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
                    
        })
    }else{
        res.status(404)
        throw new Error("User Not Found")
    }
})


const deleteUser = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id)
    if(user){
        await user.deleteOne()
        res.send({Meassage :"User deleted successfully"})
    }else{
        res.status(404)
        throw new Error("user not found")
    }
})
export {authUsers , registerUser ,getUser,updateUser,deleteUser}