const mongoose = require('mongoose')

const authorSchema = mongoose.Schema({
  nombre : {
    type : String,
    required : true
  },
  bio : {
    type : String
  },
  fechaNacimiento : {
    type : Date,
    required : true
  },
  nacionalidad : {
    type : String,
    required : true
  },
  libros : [{
    type : mongoose.Schema.Types.ObjectId,
    ref : 'libros'
  }]
})

const Author = mongoose.model('autors', authorSchema)

module.exports = Author