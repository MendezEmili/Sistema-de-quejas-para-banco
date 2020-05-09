const conexion= require('../database');
const express = require('express');
const app = express();
const fecha = require('../modelos/fechas');
const detalleQuejaCtrl = {};

//Controladores para tabla de estados externos
detalleQuejaCtrl.insertEstadoExterno = async(req, res) =>{
    var {id_estado_externo, estado} = req.body;
    const estados_externos = {
        id_estado_externo,
        estado
    }

    await conexion.query("INSERT INTO estados_externos SET ?", estados_externos, (err, result)=>{
        if(err){
            return res.status(400).send('No fue posible insertar');
        } else {
            return res.status(500).send('Insertado correctamente')
        }
    })
}

detalleQuejaCtrl.getEstadosExternos = async(req, res) =>{
    var sql = "SELECT * FROM estados_externos"

    await conexion.query(sql, (err, result)=>{
        if(err){
            return res.status(404).send("Error en búsqueda");
        } else {
            return res.json(result);
        }
    })
}


//Controladores para tabla de Estados internos
detalleQuejaCtrl.insertEstadoInterno = async(req, res) =>{
    var {id_estado_interno, estado_i} = req.body;
    const estados_externos = {
        id_estado_interno,
        estado_i
    }

    await conexion.query("INSERT INTO estados_internos SET ?", estados_externos, (err, result)=>{
        if(err){
            return res.status(400).send('No fue posible insertar');
        } else {
            return res.status(500).send('Insertado correctamente')
        }
    })
}

detalleQuejaCtrl.getEstadosInternos = async(req, res) =>{
    var sql = "SELECT * FROM estados_internos"

    await conexion.query(sql, (err, result)=>{
        if(err){
            return res.status(404).send("Error en búsqueda");
        } else {
            return res.json(result);
        }
    })
}

//Controladores para tabla de medios de ingreso
detalleQuejaCtrl.insertMedioIngreso = async(req, res) =>{
    var {id_medio_ingreso_queja, descripcion_medio} = req.body;
    const estados_externos = {
        id_medio_ingreso_queja,
        descripcion_medio
    }

    await conexion.query("INSERT INTO medios_ingreso_queja SET ?", estados_externos, (err, result)=>{
        if(err){
            return res.status(400).send('No fue posible insertar');
        } else {
            return res.status(500).send('Insertado correctamente')
        }
    })
}

detalleQuejaCtrl.getMedioIngreso = async(req, res) =>{
    var sql = "SELECT * FROM medios_ingreso_queja"

    await conexion.query(sql, (err, result)=>{
        if(err){
            return res.status(404).send("Error en búsqueda");
        } else {
            return res.json(result);
        }
    })
}

module.exports = detalleQuejaCtrl;