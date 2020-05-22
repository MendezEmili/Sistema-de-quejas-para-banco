const express= require('express');
const app = express();
const rutas= express.Router(); 

const quejaCtrl = require('../controladores/queja.controller'); 


//Nueva queja 
rutas.post('/insertar', quejaCtrl.insertarQueja);

//Autoconsulta por parte del cuentahabiente
rutas.get('/autoconsulta/:tipo_queja/:id_queja/:fecha', quejaCtrl.autoconsulta);

//Consulta para centralizador Quejas en estado interno y externo presentadas
rutas.get('/quejaspresentadas', quejaCtrl.quejasPresentadas);

//Asignar quejas a punto de atencion
rutas.post('/asignarquejapunto', quejaCtrl.asignarQueja);

//Actualizar estados y resultado de queja 
rutas.put('/actualizarestadoresultadoqueja/:tipo_queja/:id_queja', quejaCtrl.actualizarEstadoResultadoQueja);

//Actualizar estados de queja 
rutas.put('/actualizarestadosqueja/:tipo_queja/:id_queja', quejaCtrl.actualizarEstadoQueja);

//Consultar quejas asignadas a un punto de atencion por medio de usuario con rol operador
rutas.get('/consultarquejas/:correo_usuario/:estado1/:estado2/:estado3', quejaCtrl.quejasPuntoAtencion);

//Consultar quejas atendidas para rol Centralizador
rutas.get('/consultarquejasatendidas/:correo_usuario/:estado1/:estado2/:estado3', quejaCtrl.quejasAtendidasCentralizador);



module.exports = rutas; 