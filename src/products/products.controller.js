const productsService = require('./products.service')

const getAll = async (req, res) => {
    const p = await productsService.getAll({ status: req.user ? 'auth' : 'public' })
    res.json(p)
}

const getById = async (req, res, next) => {
    const p = await productsService.getById(req.params.id, { status: req.user ? 'auth' : 'public' })
    if (!p) {
        const error = new Error('Not Found')
        res.status(404)
        return next(error)
    }
    res.json(p)
}

module.exports = {
    getAll,
    getById
}