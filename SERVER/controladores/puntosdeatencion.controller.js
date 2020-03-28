const conexion= require('../database');
const express = require('express');
const app = express();
const puntoAtencionCtrl={};

puntoAtencionCtrl.selectPuntosAtencion = async(req, res) =>{
  var sql = `select * from puntosdeatencion`;
  await conexion.query(sql, (err, resultado)=> {
    if (err) {
      console.log(err)
      return res.status(500).send("Error en consulta");
    } else {
      console.log(resultado);
      return res.json(resultado)
    }  
  });   
}


puntoAtencionCtrl.insertPuntosAtencion=async (req, res)=>{

    var estado_puntodeatencion = req.body.estado_puntodeatencion;
    var region_puntodeatencion = req.body.region_puntodeatencion;
    var nombre_puntodeatencion = req.body.nombre_puntodeatencion;

    var puntoAtencion ={
      nombre_puntodeatencion,
      estado_puntodeatencion,
      region_puntodeatencion
    }
    console.log(puntoAtencion)
    await conexion.query("INSERT INTO puntosdeatencion SET ?", puntoAtencion, (err, result) =>{
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

puntoAtencionCtrl.actualizarPuntoAtencion = async(req, res)=>{
  var id = req.params.id;
  var estado_puntodeatencion = req.body.estado_puntodeatencion;
  var nombre_puntodeatencion = req.body.nombre_puntodeatencion;
  console.log(id, estado_puntodeatencion, nombre_puntodeatencion)
  var sql = `UPDATE puntosdeatencion SET nombre_puntodeatencion="${nombre_puntodeatencion}", estado_puntodeatencion=${estado_puntodeatencion} WHERE id=${id}`

  await conexion.query(sql, (err, result)=>{
    if(err){
      return res.json({
        status: 500,
        mensaje: "Error al actualizar"
      })
    } else {
      console.log("Actualizado")
      return res.json({
        status: 200,
        mensaje: "Datos actualizados"
      })
    }
  })
}

puntoAtencionCtrl.selectPuntoAtencionID = async(req, res) =>{
  var id = req.params.id;
  var sql = `select * from puntosdeatencion WHERE id=${id}`;
  await conexion.query(sql, (err, resultado)=> {
    if (err) {
      console.log(err)
      return res.status(500).send("Error en consulta");
    } else {
      console.log(resultado);
      return res.json({
        id: 1,
        nombre_puntodeatencion: resultado[0].nombre_puntodeatencion,
        estado_puntodeatencion: resultado[0].estado_puntodeatencion,
        region_puntodeatencion: resultado[0].region_puntodeatencion
      })
    }  
  });   
}

puntoAtencionCtrl.selectPuntoAtencionRegion = async(req, res) =>{
  var region = req.params.region;
  var sql = `select * from puntosdeatencion WHERE region_puntodeatencion=${region}`;
  await conexion.query(sql, (err, resultado)=> {
    if (err) {
      console.log(err)
      return res.status(500).send("Error en consulta");
    } else {
      console.log(resultado);
      res.json(resultado)
    }  
  });   
}
  

  module.exports = puntoAtencionCtrl;

  
  