const conexion= require('../database');
const fecha = require('../modelos/fechas')
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
    var fecha_creacion= fecha.fecha();

    var usuario ={
    dpi,
    nombre_usuario,
    correo_usuario,
    estado_usuario,
    region,
    cargo_usuario,  
    id_puntosdeatencion,
    fecha_creacion
    }
    console.log(usuario)
    await conexion.query("INSERT INTO usuarios SET ?", usuario, (err, result) =>{
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

usuariosCtrl.contarUsuariosPuntoAtencion = async(req, res) =>{
  var id_puntosdeatencion = req.params.id
  var sql = `select count(dpi) from usuarios WHERE id_puntosdeatencion=${id_puntosdeatencion}`;
  await conexion.query(sql, (err, resultado)=>{
    if (err){
      console.log(err);
      return res.json({
        status: 500
      })
    } else {
      console.log(resultado)
      return res.json(resultado[0])
    }
  })
}

usuariosCtrl.inactivarUsuarios = async(req, res)=>{
  var id_puntosdeatencion = req.params.id
  var sql = `UPDATE usuarios SET estado_usuario=0 WHERE id_puntosdeatencion=${id_puntosdeatencion}`;

  await conexion.query(sql, (err, resultado)=>{
    if(err){
      console.log(err);
      return res.json({
        status: 500,
        mensaje: "No fue posible actualizar"
      })
    } else {
      console.log("Datos actualizados");
      return res.json({
        status: 200,
        mensaje: "Datos actualizados"
      })
    }
  })
}

  

  module.exports = usuariosCtrl;

  
  