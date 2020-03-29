const express= require('express');
const app = express();
const rutas= express.Router(); 

const authCtrl = require('../controladores/auth.controller');

//Rutas 
//Iniciar sesion 
rutas.get('/login/:correo_usuario/:password', authCtrl.iniciarSesion);

module.exports = rutas;