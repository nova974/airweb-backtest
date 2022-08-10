const productService = require('../products/products.service')

const add = async (req, res, next) => {
    if (!req.session.cart) {
        req.session.cart = {
            items: {}
        }
    }

    const product = await productService.getById(req.body.product_id, { status: req.user ? 'auth' : 'public' })
    if (!product) {
        return res.json(req.session.cart.items)
    }

    req.session.cart.items[req.body.product_id] = {
        qty: req.body.qty,
        price: product.price
    };

    return res.json(req.session.cart.items);
}

const get = (req, res) => {
    if (!req.session.cart) {
        req.session.cart = {
            items: {}
        }
    }

    return res.json(req.session.cart.items || [])
}


module.exports = {
    add,
    get
}