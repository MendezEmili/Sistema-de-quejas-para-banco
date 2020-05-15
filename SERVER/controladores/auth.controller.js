const conexion= require('../database');
const express = require('express');
const app = express();
const authCtrl={};


authCtrl.iniciarSesion = async(req, res) =>{
    var password = req.params.password;
    var correo_usuario = req.params.correo_usuario
    var sql = `SELECT U.cargo_usuario, R.tipo_rol FROM usuarios U INNER JOIN usuario_rol UR ON U.dpi = UR.dpi INNER JOIN rol R ON UR.id_rol = R.id_rol WHERE U.correo_usuario = "${correo_usuario}" and U.password = "${password}"`;
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
