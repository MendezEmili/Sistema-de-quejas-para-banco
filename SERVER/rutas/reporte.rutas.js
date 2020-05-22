const express= require('express');
const app = express();
const rutas= express.Router(); 
//Controlador 
const reporteCtrl = require('../controladores/reporte.controller');

rutas.get('/noqueja/:tipo_queja/:id_queja/:fecha', reporteCtrl.noQueja);


module.exports = rutas; 