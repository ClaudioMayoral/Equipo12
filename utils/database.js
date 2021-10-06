//Objeto de conexion
const Sequelize = require("sequelize")
const {aplicarRelaciones} = require('./relations')

const sequelize = new Sequelize('user4DB', 'user4', 'root', {
    dialect: 'mysql',
    host: '54.198.161.35',
    define:{
        timestamp: false,
        freezeTableName: true
    }
})

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