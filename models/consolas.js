<<<<<<< HEAD
const Sequelize = require('sequelize')
const Consola = (sequelize)=>{
    sequelize.define('consola', {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nommbre: Sequelize.STRING
    });
}
=======
const Sequelize = require("sequelize")

const Consola = (sequelize)=>{
    sequelize.define('consola',{
        id:{
            type:Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre:Sequelize.STRING
    })     
    
}

>>>>>>> 6efa35d5ca921d2540385e0b1b7f3f9932301f60
module.exports = Consola