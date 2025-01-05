const express = require('express')
const passport = require('passport')
const router = express.Router()

// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

// @ desc   Google auth callback
// @route   GET /auth/google/callback
router.get('/google/callback', 
  passport.authenticate('google', { 
    failureRedirect: process.env.NODE_ENV === 'production' ? 'https://eduresources.site/login?success=false' : "http://localhost:4444/login?success=false",
    successRedirect: process.env.NODE_ENV === 'production' ? 'https://eduresources.site?success=true' : 'http://localhost:4444?success=true' ,
  })
)

// @desc    Logout user
// @route   /auth/logout
router.get('/logout', (req, res) => {
  req.logout((err) => {
      if (err) {
          return next(err)
      }
      res.redirect('/')
  })
})

// Get current user
router.get('/current-user', (req, res) => {
  res.json(req.user || null)
})

module.exports = router