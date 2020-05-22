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
rutas.put('/actualizarestadoqueja/:tipo_queja/:id_queja', quejaCtrl.actualizarEstadoQueja);

module.exports = rutas; 