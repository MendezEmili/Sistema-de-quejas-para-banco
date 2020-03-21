const express= require('express');
const rutas= express.Router(); 

const regionCtrl = require('../controladores/region.controller');

//Insertar nueva region
rutas.post('/insertar', regionCtrl.insertRegion);
//Conseguir todas las regiones 
rutas.get('/obtener', regionCtrl.selectRegiones);


module.exports = rutas; 