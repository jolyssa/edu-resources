const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
// const Resource = require('./models/Resource')
const connectDB = require('./config/db')
const resourceRoutes = require('./routes/resourceRoutes')
// const resources  // your JSON data



//?Load config file
dotenv.config({ path: './config/.env' })
//? Connect to our database
connectDB()

//? App set to express()
const app = express()

//?CORS configuration
app.use(cors({
  origin: ['http://localhost:4444', 'http://localhost:5173'], // Allow both ports
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

//?Body parser middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//? Routes
app.use('/api/resources', resourceRoutes);

// PORT
const PORT = process.env.PORT || 3000

//? Listening for our PORT
app.listen(
    PORT,
    console.log(`Server RUNNING 🏃🏾‍♀️ on port ${PORT}`)
)