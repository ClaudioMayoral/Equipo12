<<<<<<< HEAD
const Sequelize = require('sequelize')
const videojuegos = (sequelize)=>{
    sequelize.define('consolaVideojuego', {
        idCV:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        lanzamiento: Sequelize.STRING
    });
}
module.exports = videojuegos
=======
const Sequelize = require("sequelize")
const ConsolaVideojuego = (sequelize)=>{
    sequelize.define('consolaVideojuego',{
        id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        lanzamiento:Sequelize.STRING
    })     
}

module.exports = ConsolaVideojuego
>>>>>>> 6efa35d5ca921d2540385e0b1b7f3f9932301f60
