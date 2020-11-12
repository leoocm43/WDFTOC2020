const express = require('express')
const router = express.Router()
const { signupView, signupProcess } = require('../controllers/auth')
const { isAuth, checkRole } = require('../middlewares')


router.get('/signup', isAuth, signupView)
router.post('/signup', signupProcess)

module.exports = router