var conexion=require('../database');

var sql = "create table usuarios(dpi int (15) primary key,nombre_usuario varchar (50) not null,correo_usuario varchar (50) not null, estado_usuario varchar (40) not null,region varchar (50) NOT null,id_puntosdeatencion int (20) not null,FOREIGN KEY (id_puntosdeatencion) REFERENCES puntosdeatencion (id))";
conexion.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Tabla creada correctamente");
});