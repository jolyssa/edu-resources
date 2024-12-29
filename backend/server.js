const dotenv = require('dotenv')
const express = require('express')
const morgan = require('morgan')
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
    origin: process.env.NODE_ENV === 'production' 
      ? 'https://your-frontend-domain.com' 
      : 'http://localhost:5173', // Vite's default port
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
  }))

//?Body parser middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//? Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//? Routes
app.use('/api/resources', resourceRoutes);

// PORT
const PORT = process.env.PORT || 3000

//? Listening for our PORT
app.listen(
    PORT,
    console.log(`Server RUNNING 🏃🏾‍♀️ in ${process.env.NODE_ENV} mode on port ${PORT}`)
)