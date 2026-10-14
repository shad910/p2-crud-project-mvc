import "dotenv/config"
import express from 'express';
import DBConnection from './configs/db.config.js'
import route from './routes/product.routes.js';


const app = express()
const PORT = process.env.PORT || 5001

// MongoDB Database Conection
DBConnection();

// MIDDLEWARE
app.use(express.json())


// SERVER RESPONSE
app.get('/', (req, res) => {
  res.send('Hey! Buddy, This Product CRUD SERVER.')
});

app.use('/api/v1', route)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

