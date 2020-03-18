var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "admin123",
    database: "MiPistio"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Base de datos conectada");
  });