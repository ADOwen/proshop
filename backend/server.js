import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js'

dotenv.config();
const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

app.get('/', (req, res) =>{
  res.send('API is running...')
});

app.use('/api/products', productRoutes);

app.listen(PORT, ()=> {
  console.log(`Server runnin on port ${PORT}...`)
});