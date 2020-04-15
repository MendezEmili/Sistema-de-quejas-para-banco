const conexion= require('../database');

const tipoQuejaCtrl = {};
var fecha = require('../modelos/fechas');


tipoQuejaCtrl.selectTipoQueja = async(req, res) =>{
    var sql = `select * from tiposqueja`
    await conexion.query(sql, (err, resultado)=> {
      if (err) {
        console.log(err)
        return res.json({
          status: 500,
          mensaje: "Error al realizar la busqueda"
        })
      }
      else{     
        console.log(resultado);
        return res.json(resultado)
      }
      
    });
  }

tipoQuejaCtrl.insertarTipoQueja = async(req, res)=>{
    const {siglas, descripcion_tq, estado_tq} = req.body;
    var fecha_queja = fecha.fecha();
        const tipoqueja = {
         siglas,
         descripcion_tq,
         estado_tq,
         fecha_queja
        } 
        await conexion.query(`SELECT * from tiposqueja WHERE siglas="${siglas}"`, (err, resultado) =>{
            if(err){
                console.log(err)
                return res.status(400).send("Error en busqueda")
            } else if(resultado[0] != null){
                console.log("Existe registro con esas siglas");
                return res.json({
                    status: 200,
                    mensaje: "Las siglas para la queja que ingresó, ya fueron registradas previamente en el sistema, verifique."
                })
            } else {
                conexion.query("INSERT INTO tiposqueja SET ?", tipoqueja, (err, result) =>{
                    if (err) {
                       console.log("No fue posible insertar")
                       return res.status(400).send('No fue posible insertar')
                   }
                   else {
                       console.log("Insertado correctamente");
                       return res.json({
                           status: 200,
                           mensaje: "El tipo de queja " +  siglas + " " + descripcion_tq + " fue guardado correctamente"
                       })
                   }
               });
            }
        })
       
}

tipoQuejaCtrl.buscarTipoQuejaSiglas = async(req, res)=>{
    var siglas = req.params.siglas;
    var sql = `SELECT * from tiposqueja WHERE siglas="${siglas}"`;
    conexion.query(sql, (err, resultado)=>{
        if(err){
            console.log(err);
            return res.json(err);
        } else {
            return res.json(resultado);
        }
    });
}

tipoQuejaCtrl.actualizarTipoQueja = async(req, res) =>{
    var siglas = req.params.siglas; 
    var descripcion_tq = req.body.descripcion_tq; 
    var estado_tq = req.body.estado_tq;
    var sql = `UPDATE tiposqueja SET descripcion_tq="${descripcion_tq}", estado_tq=${estado_tq} WHERE siglas="${siglas}"`;

    conexion.query(sql, (err, resultado)=>{
        if(err){
            console.log(err)
            return res.json({
                status: 400,
                mensaje: "Error en actualizacion"
            })
        } else{
            console.log("Datos actualizados");
            return res.json({
                status: 200,
                mensaje: "Datos actualizados"
            })
        }
    })
}

module.exports = tipoQuejaCtrl;