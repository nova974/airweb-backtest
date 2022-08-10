const db = require('../db')

const ProductsService = {
    async getAll(filters = {}) {
        try {
            if (filters.status === 'auth') {
                return await db('products')
                    .select('id', 'label', 'description', 'price', 'thumbnail_url')
                    // .where('visible_public', 1)
                    .andWhere('visible_authenticated', 1)
            }

            return await db('products')
                .select('id', 'label', 'description', 'price', 'thumbnail_url')
                .where('visible_public', 1)

        } catch (e) {
            return []
        }
    },

    async getById(id, filters = {}) {
        try {
            if (filters.status === 'auth') {
                return db('products')
                    .first('id', 'label', 'description', 'price', 'thumbnail_url')
                    .where('id', id)
                    .andWhere('visible_authenticated', 1)
            }
            return db('products')
                .first('id', 'label', 'description', 'price', 'thumbnail_url')
                .where('id', id)
                .andWhere('visible_public', 1)

        } catch (e) {
            return null
        }


    }
}

module.exports = ProductsService