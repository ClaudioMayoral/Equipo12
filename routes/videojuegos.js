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
module.exports = router