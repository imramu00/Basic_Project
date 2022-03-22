const router = require('express').Router()
const authController = require('../controllers/auth.js')

router.post('/', authController.auth_user)

module.exports = router
