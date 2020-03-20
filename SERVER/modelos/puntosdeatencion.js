var conexion=require('../database');

var sql = "CREATE TABLE puntosdeatencion (id int (20) not null PRIMARY key,nombre_puntodeatencion varchar (50) not null, estado_puntodeatencion int (2) not null,  region_puntodeatencion varchar (10) not null)";
conexion.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Tabla creada correctamente");
});