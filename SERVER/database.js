var mysql = require('mysql');

var conexion = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "",
    database: "mipistio"
  });

    /*conexion.connect(function(err) {
      if (err) throw err;
      console.log("Conectada correctamente");
    });
*/

module.exports = conexion;