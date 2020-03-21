const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser')

//Configuraciones del servidor 
//Configurar puerto
app.set('port', process.env.PORT || 3000);

//Permitir enviar datos en formato json 
app.use(express.json());
//Permite recibir los datos que envia los usuarios
app.use(express.urlencoded({extended: false}));
app.use(cors({origin: 'http://localhost:4200'}));


//Morgan 
app.use(morgan('dev'))

app.listen(app.get('port'), () =>{
    console.log('Servidor corriendo en puerto', app.get('port'));
});

//Llamado de rutas
app.use('/puntosdeatencion', require('./SERVER/rutas/puntosdeatencion.rutas'));
app.use('/region', require('./SERVER/rutas/regiones.rutas'));
app.use('/prueba', (req, res)=>{
    res.json({
        status: 'Hola si funciona'
    })
})