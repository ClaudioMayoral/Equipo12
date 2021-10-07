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