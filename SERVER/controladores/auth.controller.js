const conexion= require('../database');
const express = require('express');
const app = express();
const authCtrl={};


authCtrl.iniciarSesion = async(req, res) =>{
    var password = req.params.password;
    var correo_usuario = req.params.correo_usuario
    var sql = `SELECT * FROM usuarios WHERE correo_usuario = ${correo_usuario}`;
    await conexion.query(sql, (err, resultado)=>{
        if(err){
            console.log(err)
            return res.status(500).send("Error al realizar la busqueda")
        } else {
            console.log(resultado)
        }
        
    })
}


module.exports = authCtrl;
