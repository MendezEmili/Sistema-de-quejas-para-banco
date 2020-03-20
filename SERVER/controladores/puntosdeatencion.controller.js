var conexion=require('../database');
const puntoAtencionCtrl = {};

puntoAtencionCtrl.selectPuntosAtencion = async(res) =>{
    var sql = "select * from puntosdeatencion";
    await conexion.query(sql, (err, result)=> {
      if (err) {
        res = err;
        return res;
      };

      
      res = result[1].id
      console.log(res);
      return res;
      
    });

    
}

module.exports = puntoAtencionCtrl;

