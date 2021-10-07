<<<<<<< HEAD
const Sequelize = require('sequelize')
const videojuegos = (sequelize)=>{
    sequelize.define('videojuego', {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nommbre: Sequelize.STRING
    });
}
module.exports = videojuegos
=======
const Sequelize = require("sequelize")

const Videojuego = (sequelize)=>{
    sequelize.define('videojuego',{
        id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre:{
            type:Sequelize.STRING(30),
            allowNull:false
        },
        anio:{
            type:Sequelize.INTEGER,
            allowNull:true
        }
    })
}

module.exports = Videojuego
>>>>>>> 6efa35d5ca921d2540385e0b1b7f3f9932301f60
