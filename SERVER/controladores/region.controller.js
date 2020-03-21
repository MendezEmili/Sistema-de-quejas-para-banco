const conexion= require('../database');
const regionesCtrl = {}

const Regiones = any =>{
    id_region;
    nombre_region;
}

regionesCtrl.selectRegiones = async(res) =>{
  var sql = "select * from regiones";
  await conexion.query(sql, (err, resultado)=> {
    if (err) {
      res = err;
      console.log(res)
      return res;
    }
    else{     
      console.log(resultado);
      //return res.status(200).send(resultado);
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

module.exports = regionesCtrl;