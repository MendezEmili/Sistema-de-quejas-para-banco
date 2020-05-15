const express= require('express');
const app = express();
const rutas= express.Router(); 

const quejaCtrl = require('../controladores/queja.controller'); 

rutas.post('/insertar', quejaCtrl.insertarQueja);
rutas.get('/autoconsulta/:tipo_queja/:id_queja/:fecha', quejaCtrl.autoconsulta);

module.exports = rutas; 