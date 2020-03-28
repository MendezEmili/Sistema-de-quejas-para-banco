const express= require('express');
const app = express();
const rutas= express.Router(); 

//Ruta para el controlador puntos de atencion
const usuariosCtrl= require('../controladores/usuarios.controller');
rutas.get('/obtener', usuariosCtrl.selectUsuarios);
//Insertar un registro 
rutas.post('/insertar', usuariosCtrl.insertUsuario);
//Buscar por dpi
rutas.get('/buscar/:dpi', usuariosCtrl.selectUsuariosdpi);
module.exports=rutas;
