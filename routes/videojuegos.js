<<<<<<< HEAD
const express = require("express")
const vjController = require('../controllers/videojuegos')
const router = express.Router()

//Formualrio de ingreso de datos (front-end)
//Servicio para el procesamiento de los datos
router.post('/agregarVideojuego', vjController.postAgregarVideojuego)
//Pagina de confirmacion
//Visualizacion de los datos guardados
router.get('/obtenerVideojuegos', vjController.getObtenerVideojuegos)
//Borrar
router.post('/borrarVideojuego', vjController.postBorrarVideojuego)
//Actualizar
router.post('/actualizarVideojuego',vjController.postActualizarVideojuego)
=======
const express = require('express')
//Mini aplicacion de express
const router = express.Router()
const vjController = require('../controllers/videojuegos')


//Servicio para procesar los datos del formulario  CREATE
router.post('/agregarVideojuego',vjController.postAgregarVideojuego)
//Consulta de videojuegos  READ
router.get('/obtenerVideojuegos',vjController.getObtenerVideojuegos)
//Eliminar videojuego  DELETE
router.post('/borrarVideojuego',vjController.postBorrarVideojuego)
//Actualizar videojuego  UPDATE
router.post('/actualizarVideojuego',vjController.postActualizarVideojuegos)


>>>>>>> 6efa35d5ca921d2540385e0b1b7f3f9932301f60
module.exports = router