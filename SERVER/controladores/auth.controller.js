const conexion= require('../database');
const express = require('express');
const app = express();
const authCtrl={};


authCtrl.iniciarSesion = async(req, res) =>{
    var password = req.params.password;
    var correo_usuario = req.params.correo_usuario
    var sql = `SELECT * FROM usuarios WHERE correo_usuario = "${correo_usuario}" and password = "${password}"`;
    await conexion.query(sql, (err, resultado)=>{
        if(err){
            console.log(err)
            return res.status(500).send("Error al realizar la busqueda")

        }else if (resultado[0]==null){
            console.log("Usuario no encontrado")
            return res.status(404).send("Usuario no encontrado");
        }
        
        else {
            
            console.log(resultado)
            return res.json(resultado)

            
        
        }
        
    })
}




module.exports = authCtrl;
