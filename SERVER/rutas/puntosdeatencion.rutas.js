const express= require('express');
const app = express();
const rutas= express.Router(); 

//Ruta para el controlador puntos de atencion
const puntosdeatencionCtrl= require('../controladores/puntosdeatencion.controller');
rutas.get('/obtener', puntosdeatencionCtrl.selectPuntosAtencion);
//Insertar un registro 
rutas.post('/insertar', puntosdeatencionCtrl.insertPuntosAtencion);
//Actualizar punto de atencion 
rutas.put('/actualizar/:id', puntosdeatencionCtrl.actualizarPuntoAtencion);
//Buscar por id
rutas.get('/buscar/:id', puntosdeatencionCtrl.selectPuntoAtencionID);
//Buscar por id
rutas.get('/buscarregion/:region', puntosdeatencionCtrl.selectPuntoAtencionRegion);
module.exports=rutas;
