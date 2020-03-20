var mysql = require('mysql');

var conexion=require('../database');

var sql = "create table rol( id_rol int AUTO_INCREMENT PRIMARY key, tipo_rol varchar (30));";
conexion.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Tabla creada correctamente");
});