//Importar biblioteca express
const { request, response } = require("express")
const express = require("express")
const path = require('path')
//Conexion a la base
const sequelize = require('./utils/database')

//Rutas
const vjRoutes = require('./routes/videojuegos')

//Crear aplicacion web
const app = express()

//Middleware que configure donde se encuentran los recursos publicos
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:true}))
app.use(express.json)
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

//Recursos
app.use('/videojuegos', vjRoutes)

sequelize.sync()
    .then(app.listen(8080, ()=>{
        console.log("Servidor online en el pureto 8080")
    }))
    .catch(err=>console.log(err))
