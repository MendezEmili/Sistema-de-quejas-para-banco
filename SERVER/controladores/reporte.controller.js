const conexion= require('../database');
const express = require('express');
const app = express();
const reporteCtrl = {}


reporteCtrl.noQueja = async(req, res)=>{
    var tipo_queja = req.params.tipo_queja;
    var id_queja = req.params.id_queja;
    var fecha = req.params.fecha;
  
    var sql = `SELECT q.id_queja, q.tipo_queja, pa.nombre_puntodeatencion, ee.estado, ei.estado_i, mi.descripcion_medio, q.resultado, q.fecha_ingreso FROM queja q 
    INNER JOIN estados_externos ee ON q.estado_externo = ee.id_estado_externo 
    INNER JOIN puntosdeatencion pa ON pa.id = q.oficina
    INNER JOIN estados_internos ei ON ei.id_estado_interno = q.estado_interno
    INNER JOIN medios_ingreso_queja mi ON mi.id_medio_ingreso_queja = q.medio_ingreso_queja
    WHERE tipo_queja = "${tipo_queja}" AND id_queja=${id_queja} AND YEAR(fecha_ingreso) = ${fecha}`;
  
    await conexion.query(sql, (err, resultado)=>{
      if(err){
        return res.status(400).send("Error al realizar la búsqueda");
      } else if(resultado[0]==null){
        return res.status(404).send("El número de la queja no existe, verifique si ingresó el número correcto.")
      } else{
        return res.json(resultado);
      }
    })
  }


module.exports = reporteCtrl