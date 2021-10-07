<<<<<<< HEAD
function aplicarRelaciones(sequelize){
    console.log(sequelize.models)
    const videojuegos = sequelize.models.videojuego
    const consola = sequelize.models.consola
    const consolaVideojuego = sequelize.models.consolaVideojuego
    
    videojuegos.belongsToMany(consola, {through: consolaVideojuego})
    consola.belongsToMany(videojuegos, {through: consolaVideojuego})
=======
function aplicarRelaciones (sequelize){

    const Videojuego = sequelize.models.videojuego
    const Consola = sequelize.models.consola
    const ConsolaVideojuego = sequelize.models.consolaVideojuego


    Videojuego.belongsToMany(Consola,{through:ConsolaVideojuego})

    Consola.belongsToMany(Videojuego,{through:ConsolaVideojuego})

>>>>>>> 6efa35d5ca921d2540385e0b1b7f3f9932301f60
}

module.exports = {aplicarRelaciones}