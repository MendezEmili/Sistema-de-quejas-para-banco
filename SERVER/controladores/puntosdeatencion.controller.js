const conexion= require('../database');
const puntoAtencionCtrl={};


const PuntosAtencion = (puntosdeatencion)=>{
    this.id = puntosdeatencion.id;
    this.nombre_puntodeatencion = puntosdeatencion.nombre_puntodeatencion;
    this.estado_puntodeatencion = puntosdeatencion.estado_puntodeatencion;
    this.region_puntodeatencion = puntosdeatencion.region_puntodeatencion;
    
  };
  

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


puntoAtencionCtrl.insertPuntosAtencion=async (req, res)=>{
    conexion.query("INSERT INTO puntosdeatencion SET ?", newPuntosAtencion, (err, result) =>{
      if (err) throw err;
      console.log("1 record inserted");
    });
}

  

  module.exports=puntoAtencionCtrl;

  
  