const express= require('express');
const app = express();
const rutas= express.Router(); 
//Controlador 
const reporteCtrl = require('../controladores/reporte.controller');

//Reporte por no de queja
rutas.get('/noqueja/:tipo_queja/:id_queja/:fecha', reporteCtrl.noQueja);

//Reporte por fecha
rutas.get('/fechaquejas/:fecha1/:fecha2', reporteCtrl.fechaQueja);


module.exports = rutas; 