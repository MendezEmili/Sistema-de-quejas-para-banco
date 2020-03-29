const express= require('express');
const app = express();
const rutas= express.Router(); 

//Ruta para el controlador puntos de atencion
const usuariosCtrl= require('../controladores/usuarios.controller');
rutas.get('/obtener', usuariosCtrl.selectUsuarios);
//Insertar un registro 
rutas.post('/insertar', usuariosCtrl.insertUsuario);
//Buscar por punto de atencion al usuario
rutas.get('/buscar/:id_puntosdeatencion', usuariosCtrl.selectUsuarioPA);
//Buscar por dpi
rutas.get('/buscar/:dpi', usuariosCtrl.selectUsuariosdpi);
//Contar cantidad de usuarios por punto de atencion
rutas.get('/contar/:id', usuariosCtrl.contarUsuariosPuntoAtencion);
//Inabilitar usuarios de un punto de atencion
rutas.put('/inactivar/:id', usuariosCtrl.inactivarUsuarios);
module.exports=rutas;
