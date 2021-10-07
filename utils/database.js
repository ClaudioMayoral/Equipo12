<<<<<<< HEAD
//Objeto de conexion
const Sequelize = require("sequelize")
const {aplicarRelaciones} = require('./relations')

const sequelize = new Sequelize('user4DB', 'user4', 'root', {
    dialect: 'mysql',
    host: '54.198.161.35',
    define:{
        timestamp: false,
=======

//Representa a la biblioteca sequelize
const Sequelize = require("sequelize")
const {aplicarRelaciones} = require('./relations')

//Objeto de Conexion
const sequelize= new Sequelize('user4DB','user4','root',{
    dialect: 'mysql',
    host: '54.198.161.35', //Direccion IP
    define:{
        //No coloques createdAt y updateAt
        timestamps:false,
        //Evitar plural
>>>>>>> 6efa35d5ca921d2540385e0b1b7f3f9932301f60
        freezeTableName: true
    }
})

<<<<<<< HEAD
//Carga de definiciones de modelo
const modelDefiners = [
    require('./models/videojuegos'),
    require('./models/consolas'),
    require('./models/consolaVideojuegos')
]

//Adherir los modelos al objeto de conexion
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}

//Realizar las relaciones entre las tablas de la BD
aplicarRelaciones(sequelize)

module.exports = sequelize
=======

//Cargar todos los modelos
const modelDefiners = [
    //importar cada modelo dentro de la carpeta models
    require('../models/videojuegos'),
    require('../models/consolas'),
    require('../models/consolaVideojuego')

]

//Adherir al objeto de conexion
for (const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}

//Realizar las relaciones entre las tablas de la base de datos

aplicarRelaciones(sequelize)


//Para poder usar en archivo externos la conexion
module.exports = sequelize;
>>>>>>> 6efa35d5ca921d2540385e0b1b7f3f9932301f60
