const dotenv = require('dotenv')
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const resourceRoutes = require('./routes/resourceRoutes')
const authRoutes = require('./routes/auth')
const passport = require('./config/passport')  
const session = require('express-session')

//?Load config file
dotenv.config({ path: './config/.env' })

//? Connect to our database
connectDB()

//? App set to express()
const app = express()

//?Body parser middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//? Add session middleware before routes
app.use(session({
  secret: process.env.SESSION_SECRET || 'keyboard cat',
  resave: false,
  saveUninitialized: false
}))

//? Initialize passport
app.use(passport.initialize())
app.use(passport.session())

//?CORS configuration
app.use(cors({
  origin: ['http://localhost:4444', 'http://localhost:5173', 'https://edu-resources.pages.dev'], // Allow these sites
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

//? Routes
app.use('/api/resources', resourceRoutes)
app.use('/auth', authRoutes) 

// PORT
const PORT = process.env.PORT || 3000

//? Listening for our PORT
app.listen(
    PORT,
    console.log(`Server RUNNING 🏃🏾‍♀️ on port ${PORT}`)
)