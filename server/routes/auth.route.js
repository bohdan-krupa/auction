const { Router } = require('express')
const { login, create } = require('../controllers/auth.controller')

const router = Router()

// /api/auth/user/login
router.post('/user/login', login)

// /api/auth/user/create
router.post('/user/create', create)

module.exports = router