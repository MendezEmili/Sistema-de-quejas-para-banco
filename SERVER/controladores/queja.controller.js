const conexion= require('../database');
const express = require('express');
const app = express();
const fecha = require('../modelos/fechas')
const quejaCtrl = {};

//Insertar queja nueva
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

//Autoconsulta para cuentahabiente
quejaCtrl.autoconsulta = async(req, res)=>{
  var tipo_queja = req.params.tipo_queja;
  var id_queja = req.params.id_queja;
  var fecha = req.params.fecha;

  var sql = `SELECT q.resultado, e.estado, q.fecha_ingreso FROM queja q INNER JOIN estados_externos e ON q.estado_externo = e.id_estado_externo WHERE tipo_queja = "${tipo_queja}" AND id_queja=${id_queja} AND YEAR(fecha_ingreso) = ${fecha}`;

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

//Consulta para quejas en estado interno y externo presentado
quejaCtrl.quejasPresentadas = async(req, res) =>{
  var sql = `SELECT * FROM queja WHERE estado_externo = 1 AND estado_interno = 1`;

  await conexion.query(sql, (err, resultado)=>{
    if(err){
      return res.status(400).send("Error al realizar consulta")
    } else {
      return res.json(resultado)
    }
  })
}


//Asignar queja a punto de atencion 
quejaCtrl.asignarQueja = async(req, res) =>{
  var id_queja = req.body.id_queja;
  var id_puntosdeatencion = req.body.id_puntosdeatencion;
  var fecha_asignacion = fecha.fecha();
  
  const asignarQueja ={
    id_queja, id_puntosdeatencion, fecha_asignacion
  }

  await conexion.query("INSERT INTO asignar_queja_punto SET ?", asignarQueja, (err, resultado)=>{
    if(err){
      return res.status(400).send("No fue posible asignar la queja al punto de atención")
      console.log("No fue posible asignar la queja al punto de atención")
    } else {
      return res.json({
        status: 200,
        mensaje: "Queja asignada correctamente"
      })
      console.log("Asignada correctamente")
    }
  })
}

//Actualizar estados y resultado de queja
quejaCtrl.actualizarEstadoResultadoQueja = async(req, res) =>{
  var tipo_queja = req.params.tipo_queja; 
  var id_queja = req.params.id_queja;
  var estado_externo = req.body.estado_externo; 
  var estado_interno = req.body.estado_interno; 
  var resultado = req.body.resultado; 
  var justificacion = req.body.justificacion

  var sql = `UPDATE queja SET estado_externo=${estado_externo}, estado_interno=${estado_interno}, resultado="${resultado}", justificacion="${justificacion}" WHERE tipo_queja="${tipo_queja}" AND id_queja=${id_queja}`

  await conexion.query(sql, (err, resultado)=>{
    if(err){
      return res.status(400).send("Error al cambiar estado de queja")
      console.log("Error al cambiar estado de queja")
    } else {
      return res.json({
        status: 200,
        mensaje: "Queja actualizada correctamente"
      })
      console.log("Estados actualizados correctamente")
    }
  })
}


//Actualizar estados
quejaCtrl.actualizarEstadoQueja = async(req, res) =>{
  var tipo_queja = req.params.tipo_queja; 
  var id_queja = req.params.id_queja;
  var estado_externo = req.body.estado_externo; 
  var estado_interno = req.body.estado_interno; 

  var sql = `UPDATE queja SET estado_externo=${estado_externo}, estado_interno=${estado_interno} WHERE tipo_queja="${tipo_queja}" AND id_queja=${id_queja}`

  await conexion.query(sql, (err, resultado)=>{
    if(err){
      return res.status(400).send("Error al cambiar estado de queja")
      console.log("Error al cambiar estado de queja")
    } else {
      return res.json({
        status: 200,
        mensaje: "Queja actualizada correctamente"
      })
      console.log("Estados actualizados correctamente")
    }
  })
}

//Consulta de quejas asignadas a un punto de atencion
quejaCtrl.quejasPuntoAtencion = async(req, res)=>{
  var correo_usuario = req.params.correo_usuario;
  var estado1 = req.params.estado1; 
  var estado2 = req.params.estado2;
  var estado3 = req.params.estado3;

  var sql = `SELECT q.id_queja, q.tipo_queja, q.justificacion, q.fecha_ingreso, q.archivo, q.detalle_queja, ee.estado, ei.estado_i, pa.nombre_puntodeatencion FROM queja q 
  INNER JOIN estados_externos ee ON ee.id_estado_externo = q.estado_externo 
  INNER JOIN estados_internos ei ON ei.id_estado_interno = q.estado_interno
  INNER JOIN puntosdeatencion pa ON pa.id = q.oficina 
  INNER JOIN usuarios u ON u.id_puntosdeatencion = pa.id
  WHERE u.correo_usuario = "${correo_usuario}" AND q.estado_externo = 2 AND q.estado_interno=${estado1} OR q.estado_interno=${estado2} OR q.estado_interno=${estado3}`;

  await conexion.query(sql, (err, resultado)=>{
    if(err){
      return res.status(400).send("Error en consulta");
    } else{
      return res.json(resultado)
    }
  })
}


//Consulta de quejas atendidas para rol centralizador
quejaCtrl.quejasAtendidasCentralizador = async(req, res)=>{
  var correo_usuario = req.params.correo_usuario;
  var estado1 = req.params.estado1; 
  var estado2 = req.params.estado2;
  var estado3 = req.params.estado3;
  
  var sql = `SELECT q.id_queja, q.tipo_queja, q.justificacion, q.fecha_ingreso, q.archivo, q.detalle_queja, ee.estado, ei.estado_i, pa.nombre_puntodeatencion FROM queja q 
  INNER JOIN estados_externos ee ON ee.id_estado_externo = q.estado_externo 
  INNER JOIN estados_internos ei ON ei.id_estado_interno = q.estado_interno
  INNER JOIN puntosdeatencion pa ON pa.id = q.oficina 
  INNER JOIN usuarios u ON u.id_puntosdeatencion = pa.id
  WHERE q.estado_externo = 2 AND q.estado_interno=${estado1} OR q.estado_interno=${estado2} OR q.estado_interno=${estado3}`;

  await conexion.query(sql, (err, resultado)=>{
    if(err){
      return res.status(400).send("Error en consulta");
    } else{
      return res.json(resultado)
    }
  })
}

module.exports = quejaCtrl; 