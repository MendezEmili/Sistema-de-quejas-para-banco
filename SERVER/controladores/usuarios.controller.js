const conexion= require('../database');
const express = require('express');
const app = express();
const usuariosCtrl={};

usuariosCtrl.selectUsuarios = async(req, res) =>{
  var sql = `select * from usuarios`;
  await conexion.query(sql, (err, resultado)=> {
    if (err) {
      console.log(err)
      return res.status(500).send("Error en consulta");
    } else {
      console.log(resultado);
  
      return res.json(resultado);
    }  
  });   
}


usuariosCtrl.insertUsuario=async (req, res)=>{

    var dpi = req.body.dpi;
    var nombre_usuario= req.body.nombre_usuario;
    var correo_usuario= req.body.correo_usuario;
    var estado_usuario= req.body.estado_usuario;
    var region= req.body.region;
    var cargo_usuario= req.body.cargo_usuario;
    var id_puntosdeatencion=req.body.id_puntosdeatencion;


    var usuarios ={
    dpi,
    nombre_usuario,
    correo_usuario,
    estado_usuario,
    region,
    cargo_usuario,  
    id_puntosdeatencion
    }
    console.log(usuarios)
    await conexion.query("INSERT INTO usuarios SET ?", usuarios, (err, result) =>{
      if (err) {
        console.log("No fue posible insertar")
        return res.status(400).send("No fue posible insertar");
      } else {
        console.log("Insertado correctamente");
        return res.json({
          status: 200,
          mensaje: "Insertado correctamente"
        })
      }
    });
}


usuariosCtrl.selectUsuariosdpi = async(req, res) =>{
  var dpi = req.params.dpi;
  var sql = `select * from usuarios WHERE dpi=${dpi}`;
  await conexion.query(sql, (err, resultado)=> {
    if (err) {
      console.log(err)
      return res.status(500).send("Error en consulta");
    } else {
      console.log(resultado);
      return res.json(resultado);
    }  
  });   
}


  

  module.exports = usuariosCtrl;

  
  