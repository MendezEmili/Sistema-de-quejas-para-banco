const express= require('express');
const app = express();
const rutas= express.Router(); 

const quejaCtrl = require('../controladores/queja.controller'); 

rutas.post('/insertar', quejaCtrl.insertarQueja);

module.exports = rutas; 