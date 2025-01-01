import express from 'express'
import passport from 'passport'
const router = express.Router()

router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
)

router.get('/google/callback', 
  passport.authenticate('google', { 
    failureRedirect: '/login',
    successRedirect: '/'
  })
)

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

// Get current user
router.get('/current-user', (req, res) => {
  res.json(req.user || null)
})

export default router