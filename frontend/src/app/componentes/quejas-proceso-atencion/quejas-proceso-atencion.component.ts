import { Component, OnInit } from '@angular/core';
import { CatalogosService } from 'src/app/servicios/catalogos.service';
import { Router } from '@angular/router';

//Modelos 
import { Queja } from '../../modelos/queja';
import { Region } from '../../modelos/region';
import { PuntosAtencion } from '../../modelos/puntos-atencion';
import { AsignarQuejaPunto } from '../../modelos/asignar-queja-punto';

@Component({
  selector: 'app-quejas-proceso-atencion',
  templateUrl: './quejas-proceso-atencion.component.html',
  styleUrls: ['./quejas-proceso-atencion.component.css']
})
export class QuejasProcesoAtencionComponent implements OnInit {
  
  token: any;
  correo_usuario: any;
  quejaAceptada: boolean = false;

  quejaAsignada: any ={
    tipo_queja: '',
    id_queja: 0,
    justificacion: '',
    fecha_ingreso: '',
    archivo: '',
    detalle_queja: '',
    estado: '',
    estado_i: '',
    nombre_puntodeatencion: ''
  }

  quejasAsignadas: any = [];

  queja: Queja ={
    id_queja: 0,
    medio_ingreso_queja: 0,
    nombre: '',
    correo: '',
    telefono: 0,
    oficina: 0,
    nombre_empleado: 0,
    detalle_queja: '',
    ingreso_queja: '',
    estado_externo: 0,
    estado_interno: 0,
    tipo_queja: '',
    resultado: '',
    justificacion: null
  }

  region: Region = {
    id_region: 0,
    nombre_region: ''
  }

  regiones: any = []

  puntoAtencion: PuntosAtencion = {
    id: 0,
    nombre_puntodeatencion: '',
    estado_puntodeatencion: 0,
    region_puntodeatencion: ''
  }

  puntosAtencion: any; 

  asignarQuejaPunto: AsignarQuejaPunto ={
    id_asignacion_queja_punto: 0,
    id_queja: 0,
    id_puntosdeatencion: 0
  }

  constructor(private catalogosService: CatalogosService, private ruta: Router) { }

  ngOnInit(): void {
    this.token = this.catalogosService.getToken();
    if(this.token == "valido"){
      this.correo_usuario = this.catalogosService.getCorreo();
      this.catalogosService.consultarQuejaOperador(this.correo_usuario, 4, 6, 7).subscribe(
        res =>{
          this.quejasAsignadas = res;
          console.log(this.quejasAsignadas)
        }, 
        err=>{
          alert("Error en busqueda")
        }
      )
    } else {
      this.ruta.navigate(['/home'])
    }
  }

  establecerValores(tipo_queja, id_queja, justificacion, fecha_ingreso, archivo, detalle_queja, estado, estado_i, nombre_puntodeatencion){
    this.quejaAsignada.tipo_queja = tipo_queja;
    this.quejaAsignada.id_queja = id_queja; 
    this.quejaAsignada.justificacion = justificacion;
    this.quejaAsignada.fecha_ingreso = fecha_ingreso;
    this.quejaAsignada.archivo = archivo;
    this.quejaAsignada.detalle_queja = detalle_queja;
    this.quejaAsignada.estado = estado;
    this.quejaAsignada.estado_i = estado_i;
    this.quejaAsignada.nombre_puntodeatencion = nombre_puntodeatencion;
  }


  rechazo(tipo, id){
    this.queja.tipo_queja = tipo; 
    this.queja.id_queja = id;
  }

  rechazarQueja(){
    this.queja.estado_externo = 2;
    this.queja.estado_interno = 8; 
    this.queja.resultado = this.queja.justificacion;
    this.catalogosService.actualizarEstadoResultadoQueja(this.queja.tipo_queja, this.queja.id_queja, this.queja).subscribe(
      res=>{
        location.reload();
      },
      err=>{
        alert("Error al rechazar la queja")
      }
    )
  }

  resolver(tipo, id, justificacion){
      this.queja.estado_externo = 3;
      this.queja.estado_interno = 9;
      this.queja.justificacion = justificacion
      this.catalogosService.actualizarEstadoResultadoQueja(tipo, id, this.queja).subscribe(
        res =>{
          location.reload();
          console.log(res);
        },
        err =>{
          alert("Error al resolver queja")
        }
      )
  }

  buscarRegiones(tipo, id){
    this.catalogosService.getRegiones().subscribe(
      res =>{
        this.regiones = res;
        console.log(this.regiones)
      },
      err =>{
        console.log(err)
      }
    )
  this.queja.tipo_queja = tipo; 
  this.queja.id_queja = id;
  }

  buscar(id_region){
    this.catalogosService.buscarPuntoAtencionRegion(id_region).subscribe(
      res=>{
        this.puntosAtencion = res;
        console.log(res)
      },
      err =>{
        console.log(err)
      }
    )
  }

  asignarValores(id){
    this.asignarQuejaPunto.id_puntosdeatencion = id; 
    this.asignarQuejaPunto.id_queja = this.queja.id_queja;
  }


  asignar(){
    this.queja.estado_externo = 2; 
    this.queja.estado_interno = 4; 
    this.queja.resultado = "Trasladada al Administrador del punto de atención correspondiente para su análisis."
    this.catalogosService.asignarQuejaPunto(this.asignarQuejaPunto).subscribe(
     res =>{
       console.log(res);
       this.catalogosService.actualizarEstadoResultadoQueja(this.queja.tipo_queja, this.queja.id_queja, this.queja).subscribe(
         res =>{
          console.log(res);
          alert("Trasladada al Administrador del punto de atención correspondiente para su análisis.");
          location.reload();
         }, 
         err =>{
           alert("No fue posible actualizar estado de queja")
         }
       )
     },
     err =>{
       alert("No fue posible asignar queja a punto de atención");
     }
    )

  }

}
