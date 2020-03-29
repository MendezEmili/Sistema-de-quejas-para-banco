const express= require('express');
const app = express();
const rutas= express.Router(); 

//Ruta para el controlador puntos de atencion
const usuariosCtrl= require('../controladores/usuarios.controller');
rutas.get('/obtener', usuariosCtrl.selectUsuarios);
//Insertar un registro 
rutas.post('/insertar', usuariosCtrl.insertUsuario);
//Buscar por punto de atencion al usuario
rutas.get('/buscarusuariopunto/:id_puntosdeatencion', usuariosCtrl.selectUsuarioPA);
//Buscar por dpi
rutas.get('/buscar/:dpi', usuariosCtrl.selectUsuariosdpi);
//Inabilitar usuarios de un punto de atencion
rutas.put('/inactivar/:id', usuariosCtrl.inactivarUsuarios);
//actualizar usuarios por dpi 
rutas.put('/actualizar/:dpi', usuariosCtrl.editarUsuario);
module.exports=rutas;
