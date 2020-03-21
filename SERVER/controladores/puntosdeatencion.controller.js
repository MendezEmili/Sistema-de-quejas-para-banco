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
    await conexion.query(sql, (err, resultado)=> {
      if (err) {
        return res;
      };
      
      console.log(resultado);
      return res.send(resultado)     
    });

    
}


puntoAtencionCtrl.insertPuntosAtencion=async (req, res)=>{

    var {estado_puntodeatencion, region_puntodeatencion} = req.body
    var id = req.body.id;
    var nombre_puntodeatencion = req.body.nombre_puntodeatencion;
    region_puntodeatencion = parseInt("region_puntodeatencion", 10);
    console.log(region_puntodeatencion)
    var puntoAtencion ={
      id,
      nombre_puntodeatencion,
      estado_puntodeatencion,
      region_puntodeatencion
    }
    console.log(puntoAtencion)
    await conexion.query("INSERT INTO puntosdeatencion SET ?", puntoAtencion, (err, result) =>{
      if (err) {
        console.log("No fue posible insertar")
        return res.status(400).send("No fue posible insertar");
      } else {
        console.log("Insertado correctamente");
        return res.status(200);
      }
    });
}

  

  module.exports=puntoAtencionCtrl;

  
  