var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: "chamilo.cjesba5rpuyf.us-east-1.rds.amazonaws.com",
    port: "3306",
    user: "admin",
    password: "admin123",
    database: "mipistio"
  });

  /*  conexion.connect(function(err) {
      if (err) throw err;
      console.log("Conectada correctamente");
    });
*/

module.exports = conexion;