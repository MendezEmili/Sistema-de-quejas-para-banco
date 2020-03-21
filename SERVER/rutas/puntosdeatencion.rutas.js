const express= require('express');
const rutas= express.Router(); 

//Ruta para el controlador puntos de atencion
const puntosdeatencionCtrl= require('../controladores/puntosdeatencion.controller');
rutas.get('/obtener', puntosdeatencionCtrl.selectPuntosAtencion);
//Insertar un registro 
rutas.post('/insertar', puntosdeatencionCtrl.insertPuntosAtencion);


module.exports=rutas;
