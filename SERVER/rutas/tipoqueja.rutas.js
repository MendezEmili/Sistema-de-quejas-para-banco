const express= require('express');
const rutas= express.Router(); 


const tipoQuejaCtrl = require('../controladores/tipoqueja.controller');

//Obtener todos los tipos de queja
rutas.get('/obtener', tipoQuejaCtrl.selectTipoQueja);
//Insertar un tipo de queja
rutas.post('/insertar', tipoQuejaCtrl.insertarTipoQueja);
//Buscar por siglas 
rutas.get('/buscar/:siglas', tipoQuejaCtrl.buscarTipoQuejaSiglas);
//Actualizar un tipo de queja 
rutas.put('/actualizar/:siglas', tipoQuejaCtrl.actualizarTipoQueja);


module.exports = rutas;