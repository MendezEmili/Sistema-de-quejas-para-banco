const conexion= require('../database');
const express = require('express');
const app = express();
const fecha = require('../modelos/fechas')
const quejaCtrl = {};

quejaCtrl.insertarQueja = async(req, res)=>{
    var medio_ingreso_queja = req.body.medio_ingreso_queja;
    var nombre = req.body.nombre;
    var correo = req.body.correo;
    var telefono = req.body.telefono;
    var oficina = req.body.oficina;
    var dpi_empleado = req.body.dpi_empleado;
    var detalle_queja = req.body.detalle_queja;
    var archivo = req.body.archivo;
    var estado_externo = req.body.estado_externo;
    var estado_interno = req.body.estado_interno;
    var fecha_ingreso = fecha.fecha();
    var tipo_queja = req.body.tipo_queja;
    var ingreso_queja = req.body.ingreso_queja;
    var resultado = req.body.resultado;
    var justificacion = req.body.justificacion;

    const queja ={
        medio_ingreso_queja,
        nombre,
        correo,
        telefono,
        oficina,
        dpi_empleado,
        detalle_queja,
        archivo,
        estado_externo,
        estado_interno,
        fecha_ingreso,
        tipo_queja,
        ingreso_queja,
        resultado,
        justificacion
    }
    console.log(queja)
    await conexion.query("INSERT INTO queja SET ?", queja, (err, resultado)=>{
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


quejaCtrl.autoconsulta = async(req, res)=>{
  var tipo_queja = req.params.tipo_queja;
  var id_queja = req.params.id_queja;
  var fecha = req.params.fecha;

  var sql = `SELECT q.estado_externo, q.resultado, e.estado FROM queja q INNER JOIN estados_externos e ON q.estado_externo = e.id_estado_externo WHERE tipo_queja = "${tipo_queja}" AND id_queja=${id_queja} AND YEAR(fecha_ingreso) = ${fecha}`;

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

module.exports = quejaCtrl;