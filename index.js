const express = require('express');
const app = express();
const cors = require('cors');

//Configuraciones del servidor 
//Configurar puerto
app.set('port', process.env.PORT || 3000);

//Permitir enviar datos en formato json 
app.use(express.json());
app.use(express.urlencoded());
app.use(cors({origin: 'http://localhost:4200'}));


app.listen(app.get('port'), () =>{
    console.log('Servidor corriendo en puerto', app.get('port'));
});

//Llamado de rutas
app.use('/puntosdeatencion', require('./SERVER/rutas/puntosdeatencion.rutas'));