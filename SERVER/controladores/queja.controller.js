const conexion= require('../database');
const express = require('express');
const app = express();
const fecha = require('../modelos/fechas')
const quejaCtrl = {};
const envCorreo = require('../modelos/correo');

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
    await conexion.query("INSERT INTO queja SET ?", queja, (err, resultado)=>{
        if (err) {
            console.log("No fue posible insertar")
            return res.status(400).send("No fue posible insertar");
          } else {
            console.log("Insertado correctamente" + fecha_ingreso);
            conexion.query(`SELECT id_queja, tipo_queja FROM queja WHERE fecha_ingreso="${fecha_ingreso}" AND nombre="${nombre}"`, (err, result)=>{
              if(err){
                return res.json({
                  status: 400,
                  error: "no fue posible insertar"
                });
              } else {
                console.log(result)
                contentHTML = `
                <p>Señor cuentahabiente,  agradecemos su comunicación,  
                le informamos que su queja ha sido recibida exitosamente. 
                Para el seguimiento o cualquier consulta relacionada, 
                no olvide que el número de su queja es ${result[0].tipo_queja}-${result[0].id_queja}-2020<p>
                `;

                envCorreo.transporter.sendMail({
                  from: '"Banco mi pistio" <banco@gmail.com>',
                  to: 'usuario@gmail.com',
                  subject: 'Sistema de quejas',
                  html: contentHTML
                })

                envCorreo.transporter.sendMail({
                  from: '"Banco mi pistio" <banco@gmail.com>',
                  to: 'usuario@gmail.com',
                  subject: 'Queja creada',
                  text: 'El sistema de quejas le informa que se ha recibido una queja, la cual debe ser asignada dentro de las próximas 24 horas'
                })
                return res.json(result);         
              }
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
      console.log("No fue posible asignar la queja al punto de atención")
      return res.status(400).send("No fue posible asignar la queja al punto de atención")
      
    } else {
      console.log("Asignada correctamente")
      envCorreo.transporter.sendMail({
        from: '"Banco mi pistio" <banco@gmail.com>',
        to: 'usuario@gmail.com',
        subject: 'Sistema de quejas',
        text: 'Señor(a) Cuentahabiente, su queja ha sido trasladada al administrador del punto de atención correspondiente para su análisis'
      })

      envCorreo.transporter.sendMail({
        from: '"Banco mi pistio" <banco@gmail.com>',
        to: 'usuario@gmail.com',
        subject: 'Queja creada',
        text: 'Estimado(a) El sistema para control de quejas por mal servicio o servicio no conforme le informa que se le asignó la queja No. [##########]”Para su atención tiene un plazo máximo de 5 días hábiles, según normativa vigente.'
      })
      return res.json({
        status: 200,
        mensaje: "Queja asignada correctamente"
      })
      
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
      console.log("Error al cambiar estado de queja")
      return res.status(400).send("Error al cambiar estado de queja")  
    } else {
      console.log("Estados actualizados correctamente")
      return res.json({
        status: 200,
        mensaje: "Queja actualizada correctamente"
      })
      
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
      console.log("Error al cambiar estado de queja")
      return res.status(400).send("Error al cambiar estado de queja")     
    } else {
      console.log("Estados actualizados correctamente")
      return res.json({
        status: 200,
        mensaje: "Queja actualizada correctamente"
      })
      
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