const conexion= require('../database');
const express = require('express');
const app = express();
const regionesCtrl = {}

const Regiones = any =>{
    id_region;
    nombre_region;
}

regionesCtrl.selectRegiones = async(req, res) =>{
  var sql = `select * from regiones`
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

regionesCtrl.selectRegionID = async(req, res) =>{
  var id_region = req.params.id_region;
  var sql = `select * from regiones WHERE id_region=${id_region}`;
  await conexion.query(sql, (err, resultado)=> {
    if (err) {
      console.log(err)
      return res.status(500).send("Error en busqueda")
    }
    else{     
      console.log(resultado);
      return res.json({
        status: 200,
        id_region: resultado[0].id_region,
        nombre_region: resultado[0].nombre_region
      })
    }
    
  });
}

regionesCtrl.insertRegion = async(req, res) =>{
   const {id_region, nombre_region} = req.body;
      const region = {
        id_region,
        nombre_region
      } 

      await conexion.query("INSERT INTO regiones SET ?", region, (err, result) =>{
        if (err) {
          console.log("No fue posible insertar")
          return res.status(400).send('No fue posible insertar')
        }
        else {
          console.log("Insertado correctamente");
          return res.status(200).send('Insertado correctamente')
        }
      });
}


regionesCtrl.actualizarRegion = async(req, res)=>{
  var id_region = req.params.id_region; 
  var nombre_region = req.body;
  console.log(id_region)
  var sql = `UPDATE regiones SET nombre_region="${nombre_region}" WHERE id_region=${id_region}`

  await conexion.query(sql, (err, result)=>{
    if(err){
      console.log("No es posible actualizar el registro")
      return res.status(500).send("Error al actualizar, parametro no valido")
    } else{
      return res.status(200).send("Actualizado correctamente")
    }
  })
}
module.exports = regionesCtrl;