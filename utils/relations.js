function aplicarRelaciones(sequelize){
    console.log(sequelize.models)
    const videojuegos = sequelize.models.videojuego
    const consola = sequelize.models.consola
    const consolaVideojuego = sequelize.models.consolaVideojuego
    
    videojuegos.belongsToMany(consola, {through: consolaVideojuego})
    consola.belongsToMany(videojuegos, {through: consolaVideojuego})
}

module.exports = {aplicarRelaciones}