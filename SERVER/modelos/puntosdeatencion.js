var conexion=require('../database');

const Puntos_Atencion = function(puntosdeatencion){
  id: Number;
  nombre_puntodeatencion: String;
  estado_puntodeatencion: Number;
  region_puntodeatencion: Number;
}


module.exports = Puntos_Atencion;
