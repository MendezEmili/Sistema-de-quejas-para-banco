import { Component, OnInit } from '@angular/core';
//Importar servicio
import { CatalogosService } from 'src/app/servicios/catalogos.service';

//Importar modelos 
import { Queja } from '../../modelos/queja';
import { Router } from '@angular/router';
import { PuntosAtencion } from '../../modelos/puntos-atencion';
import { Region } from '../../modelos/region';
import { AsignarQuejaPunto } from '../../modelos/asignar-queja-punto';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-quejas-igresadas',
  templateUrl: './quejas-igresadas.component.html',
  styleUrls: ['./quejas-igresadas.component.css']
})
export class QuejasIgresadasComponent implements OnInit {

  autorizacion: boolean = false;
  token: any; 
  error: any; 

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
  quejas: any = [];

  puntoAtencion: PuntosAtencion = {
    id: 0,
    nombre_puntodeatencion: '',
    estado_puntodeatencion: 0,
    region_puntodeatencion: ''
  }

  puntosAtencion: any; 

  region: Region = {
    id_region: 0,
    nombre_region: ''
  }

  regiones: any = []

  asignarQuejaPunto: AsignarQuejaPunto ={
    id_asignacion_queja_punto: 0,
    id_queja: 0,
    id_puntosdeatencion: 0
  }

  constructor(private catalogosService: CatalogosService, private ruta: Router) { }

  ngOnInit(): void {
    this.autorizacion = false;
    this.token = this.catalogosService.getToken();
    if(this.token == "valido"){
      this.autorizacion = true;
      this.catalogosService.quejasPresentadas().subscribe(
        res=>{
          this.quejas = res;
          console.log(res)
        }, 
        err =>{
          this.error = err;
          alert(this.error.error)
        }
      )
    } else {
      this.ruta.navigate(['/home'])
    }
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

  establecerValores(id){
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
           this.error = err; 
           alert("No fue posible actualizar estado de queja")
         }
       )
     },
     err =>{
       this.error = err; 
       alert("No fue posible asignar queja a punto de atención");
     }
    )

  }

  rechazar(tipo, id){
    this.queja.tipo_queja = tipo; 
    this.queja.id_queja = id;
    var confirmacion = confirm("¿Está seguro de que quiere rechazar este registro?");
    if(confirmacion){
      this.queja.justificacion = prompt("Ingrese justificación del rechazo");
      console.log(this.queja.justificacion)
      if(this.queja.justificacion == null){
        alert("Debe ingresar la Justificación correspondiente");
      } else{       
        this.queja.estado_externo = 3; 
        this.queja.estado_interno = 3; 
        this.queja.resultado = this.queja.justificacion; 
        this.catalogosService.actualizarEstadoResultadoQueja(this.queja.tipo_queja, this.queja.id_queja, this.queja).subscribe(
          res=>{
            location.reload();
          }, 
          err =>{
            alert("No fue posible actualizar el estado de la queja")
          }
        )
        
      }
    }
  }
}
