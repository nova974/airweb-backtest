const express = require('express')
const cors = require('cors');
const session = require('express-session')
require('dotenv').config();

const middlewares = require('./common/middleware')
const authMiddleware = require('./auth/auth.middleware')

const productsRoutes = require('./products/products.routes')
const authRoutes = require('./auth/auth.routes')
const cartRoutes = require('./cart/cart.routes')

const app = express()

app.use(cors())
app.use(express.json())

app.use(session({
    secret: 'test',
    resave: true,
    saveUninitialized: true,
    cookie: {
        path: '/',
        httpOnly: true,
        maxAge: 3600000
    }
}))

app.use('/auth', authRoutes)
app.use('/products', [authMiddleware.checkToken], productsRoutes)
app.use('/cart', cartRoutes)

app.get('/status', (req, res) => {
    res.send({ message: 'status good'})
})

app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

module.exports = app