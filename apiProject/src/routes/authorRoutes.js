const express = require('express')
const authorController = require('../controllers/authorController')
const route = express()

route.get('/', authorController.getAllAuthors )
route.get('/:id', authorController.getAuthorById)
route.post('/', authorController.createAuthor)
route.put('/:id', authorController.updateAuthor)
route.put('/:id/addBook:bookId', authorController.addBookInAuthor)
route.delete('/:id', authorController.deleteAuthor)

module.exports = route