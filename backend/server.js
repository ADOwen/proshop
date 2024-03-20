import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import products from './data/product.js'
const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) =>{
  res.send('API is running...')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})
app.get('/api/products/:id', (req, res) => {
  const product = products.find(product => product._id === req.params.id);
  res.json(product);
})


app.listen(PORT, ()=> {
  console.log(`Server runnin on port ${PORT}...`)
})