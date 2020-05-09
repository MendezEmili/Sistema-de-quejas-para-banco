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


module.exports = quejaCtrl;