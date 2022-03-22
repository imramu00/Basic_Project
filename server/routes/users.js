const router = require('express').Router()
const userController = require('../controllers/users.js')

router.post('/', userController.create_user)

module.exports = router
