const express = require('express')
const bookController = require('../controllers/bookController')
const route = express()

route.get('/', bookController.getAllBooks )
route.get('/:id', bookController.getBookById)
route.post('/', bookController.createBook)
route.put('/:id', bookController.updateBook)
route.delete('/:id', bookController.deleteBook)

module.exports = route