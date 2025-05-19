const mongoose  = require('mongoose')

const bookSchema  = mongoose.Schema({
  titulo : {
    type : String,
    required : true
  },
  resumen : {
    type : String
  },
  genero : {
    type : String,
    required : true,
    enum : ['novela', 'poesia', 'ensayo']
  },
  publicacion : {
    type : Date,
    required : true
  },
  disponible : {
    type : Boolean,
    required : true
  }
})

const Book = mongoose.model('libros', bookSchema)

module.exports = Book