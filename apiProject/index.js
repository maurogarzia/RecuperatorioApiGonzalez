const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const bookRoutes = require('./src/routes/bookRoutes')
const authorRoutes = require('./src/routes/authorRoutes')

dotenv.config()
const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URL , {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() =>{
    console.log('Conectado');
})
.catch((error) => {
    console.log('Ocurrio un error', error);

})

app.use('/books', bookRoutes)
app.use('/authors', authorRoutes)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Servidor Corriendo en el puerto ${port}`);
})

app.get('/', (req, res) => {
    res.send('Bienvenido a la API de Libros');
});
