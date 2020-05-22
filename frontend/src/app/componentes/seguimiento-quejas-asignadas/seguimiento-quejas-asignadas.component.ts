import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CatalogosService } from 'src/app/servicios/catalogos.service';

//Modelos 
import { Queja } from '../../modelos/queja';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguimiento-quejas-asignadas',
  templateUrl: './seguimiento-quejas-asignadas.component.html',
  styleUrls: ['./seguimiento-quejas-asignadas.component.css']
})
export class SeguimientoQuejasAsignadasComponent implements OnInit {
  
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


  constructor(private catalogosService: CatalogosService, private ruta: Router) { }

  ngOnInit(): void {
    this.token = this.catalogosService.getToken();
    if(this.token == "valido"){
      this.correo_usuario = this.catalogosService.getCorreo();
      this.catalogosService.consultarQuejaOperador(this.correo_usuario, 4, 8, 5).subscribe(
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

  procedente(tipo, id){
    this.queja.estado_externo = 2; 
    this.queja.estado_interno = 5; 
    var confirmar = confirm("Queja será actualizada a estado procedente, oprima Aceptar si está de acuerdo o Cerrar si no lo está")
    if(confirmar){
      this.quejaAceptada = true;
      this.catalogosService.actualizarEstadosQueja(tipo, id, this.queja).subscribe(
        res=>{
          console.log(res)
        },
        err =>{
          alert("No fue posible cambiar el estado")
        }
      )
    }
    
  }

  rechazo(tipo, id){
    this.queja.tipo_queja = tipo; 
    this.queja.id_queja = id;
  }

  rechazarQueja(){
    this.queja.estado_externo = 2;
    this.queja.estado_interno = 6; 
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

  resolver(tipo, id){
    var confirmar = confirm("Queja será resuelta, verificar que haya ingresado detalles de la gestión, no se podrá ingresar más información");
    if(confirmar){
      this.queja.estado_externo = 2;
      this.queja.estado_interno = 7;
      this.queja.resultado = this.queja.justificacion;
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
  }
}
