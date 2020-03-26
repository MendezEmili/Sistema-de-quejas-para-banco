const express= require('express');
const app = express();
const rutas= express.Router(); 

const regionCtrl = require('../controladores/region.controller');

//Insertar nueva region
rutas.post('/insertar', regionCtrl.insertRegion);
//Conseguir todas las regiones 
rutas.get('/obtener', regionCtrl.selectRegiones);
//Actualizar una region 
rutas.put('/actualizar/:id_region', regionCtrl.actualizarRegion);
//Busqueda por id 
rutas.get('/buscar/:id_region', regionCtrl.selectRegionID);

module.exports = rutas; 