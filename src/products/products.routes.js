const express = require('express')
const productsController = require('./products.controller')

const router = express.Router()

router.get('/', productsController.getAll)
router.get('/:id', productsController.getById)

module.exports = router