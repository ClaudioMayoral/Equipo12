const express = require ("express")
const path = require("path")
const vjRoutes = require('./routes/videojuegos')
const conRoutes = require('./routes/consolas')
const conVRoutes = require('./routes/consolaVideojuegos')
const sequelize = require('./utils/database')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use( "/videojuegos",vjRoutes);
app.use( "/consolas",conRoutes);
app.use( "/consolaVideojuegos",conVRoutes);

app.get("/prueba", (req, res) =>{
    res.send("Prueba del servidor funcianando")

})

sequelize.sync()
    .then(()=>{
        app.listen(8083,()=>{
            console.log("Aplicación web en línea en el puerto 8083")
    })
    })
    .catch(err=>console.log(err))







