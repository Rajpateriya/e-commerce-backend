import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import connectDB from './config/db.js';

import productsRoutes from './routes/productRoutes.js'

dotenv.config();
connectDB()
const app = express()


app.use(cors());
app.use(express.json());


app.use('/api/products' , productsRoutes);
// app.use('/api/users' , userRoutes);
// app.use('/api/orders' , orderRoutes);
// app.use('/api/upload' , uploadRoutes);


const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`server is running on port ${process.env.PORT} `)
})
