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