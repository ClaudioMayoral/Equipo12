const path = require('path')
const videojuego = require('../utils/database').models.videojuego

exports.postAgregarVideojuego = (req, res)=>{
    console.log(req.body)
    videojuego.create(req.body)
        .then(res=>{
            console.log("Registro Exitoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
}

exports.getObtenerVideojuegos = (req,res)=>{
    videojuego.findAll()
        .then(videojuegos => {
            console.log(videojuegos)
            res.json(videojuegos)
        })
}

exports.postBorrarVideojuego = (req, res) =>{
    console.log(req.body)
    videojuego.destroy({
        where:{
            id: req.body.id
        }
    })
    .then(() =>{
        console.log("Videojuego Borrado")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postActualizarVideojuego = (req,res) => {
    console.log(req.body)
    videojuego.update({
        nombre: req.body.nombre
    },{
        where:{
            id: req.body.id
        }
    })
    .then(() => {
        console.log("Videojuego Actualizado")
        res.json({estado: "aceptado"})
    })
    .catch(err=> {
        console.log(err)
        res.json({estado: "error"})
    })
}