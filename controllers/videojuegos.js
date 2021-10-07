const path = require('path')
<<<<<<< HEAD
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
=======
const Videojuego = require('../utils/database').models.videojuego


exports.postAgregarVideojuego = (req, res)=>{
    console.log(req.body)

    Videojuego.create(req.body)
    .then(result=>{
        console.log("Videojuego creado exitosamente")
        res.json({
            estado: "aceptado"
        })
    })
    .catch((err)=>{
        console.log(err)
        res.json({
            estado: "error"
        })
    })
    
    
}


exports.getObtenerVideojuegos = (req, res)=>{
    Videojuego.findAll()
    .then(videojuegos =>{
        console.log(videojuegos)
        res.json(videojuegos)
    })
    .catch((err)=>{
        console.log(err)
        res.json({
            estado: "error"
        })
    })
    
}

exports.postBorrarVideojuego = (req, res)=>{
    console.log(req.body)
    Videojuego.destroy({
        where:{
            id:req.body.id
        }
    })
    .then(() =>{
        console.log("Registro eliminado")
        res.json({
            estado: "aceptado"
        })
    })
    .catch((err)=>{
        console.log(err)
        res.json({
            estado: "error"
        })
    })
}

exports.postActualizarVideojuegos = (req, res)=>{
    console.log(req.body)

    Videojuego.update({
        nombre: req.body.nombre,
        anio: req.body.anio

    },{
        where:{
            id:req.body.id
        }
    })
    .then(() =>{
        console.log("Registro actualizado")
        res.json({
            estado: "aceptado"
        })
    })
    .catch((err)=>{
        console.log(err)
        res.json({
            estado: "error"
        })
>>>>>>> 6efa35d5ca921d2540385e0b1b7f3f9932301f60
    })
}