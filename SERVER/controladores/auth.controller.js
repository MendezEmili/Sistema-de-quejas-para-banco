const conexion= require('../database');
const express = require('express');
const app = express();
const authCtrl={};


authCtrl.iniciarSesion = async(req, res) =>{
    var password = req.params.password;
    var correousuario = req.params.correo_usuario
    var sql = `select * from usuarios WHERE correo_usuario="${correousuario}"`;
    await conexion.query(sql, (err, resultado)=>{
        if(err){
            console.log(err)
            return res.status(500).send("Error al realizar la busqueda")
        } 
        
    })
}


module.exports = authCtrl;
