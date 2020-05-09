const express= require('express');
const app = express();
const rutas= express.Router(); 

const detalleQuejaCtrl = require('../controladores/detalleQueja.controller');

//rutas para tablas implicadas en detalle de queja 
//Estado externo 
rutas.get('/conseguiree', detalleQuejaCtrl.getEstadosExternos);
rutas.post('/insertaree', detalleQuejaCtrl.insertEstadoExterno);
//Estado interno
rutas.get('/conseguirei', detalleQuejaCtrl.getEstadosInternos);
rutas.post('/insertarei', detalleQuejaCtrl.insertEstadoInterno);
//Me
module.exports = rutas; 