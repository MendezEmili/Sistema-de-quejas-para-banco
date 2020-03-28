const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config')

//Configuraciones del servidor 
//Configurar puerto
app.set('port', process.env.PORT || 3000);

//Permitir enviar datos en formato json 
app.use(express.json());
//Permite recibir los datos que envia los usuarios
app.use(express.urlencoded({extended: false}));
app.use(cors({origin: 'http://'+ config.BASE_URL +':4200'}));


//Morgan 
app.use(morgan('dev'))

app.listen(app.get('port'), () =>{
    console.log('Servidor corriendo en puerto', app.get('port'));
});

//Llamado de rutas
app.use('/puntosdeatencion', require('./rutas/puntosdeatencion.rutas'));
app.use('/region', require('./rutas/regiones.rutas'));
app.use('/usuarios', require('./rutas/usuarios.rutas'))        
app.use('/', (req, res)=>{
    res.json({
        status: 'Sistema de Banco Mi Pistio'
    })
})