var conexion=require('../database');

var sql = "CREATE TABLE tiposqueja( siglas varchar (10) not null PRIMARY KEY, descripcion_tq varchar (100) not null, estado_tq int (2) not null, fecha_queja DATE not null )";
conexion.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Tabla creada correctamente");
});
