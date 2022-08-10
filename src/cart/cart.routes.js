const express = require('express')
const cartController = require('./cart.controller')

const router = express.Router()

router.post('/', cartController.add)
router.get('/', cartController.get)

module.exports = router