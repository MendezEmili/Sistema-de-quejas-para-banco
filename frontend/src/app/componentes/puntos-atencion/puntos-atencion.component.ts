import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

//Importar rutas para consumo de servicios 
import { CatalogosService } from '../../servicios/catalogos.service';

//Importar modelos 
import { PuntosAtencion } from '../../modelos/puntos-atencion'
import { Region } from '../../modelos/region';
import { Usuarios } from '../../modelos/usuarios'
import { Router } from '@angular/router';

@Component({
  selector: 'app-puntos-atencion',
  templateUrl: './puntos-atencion.component.html',
  styleUrls: ['./puntos-atencion.component.css']
})
export class PuntosAtencionComponent implements OnInit {
  token: any;
  autorizacion: boolean;

  puntoAtencion: PuntosAtencion = {
    id: 0,
    nombre_puntodeatencion: '',
    estado_puntodeatencion: 0,
    region_puntodeatencion: ''
  }

  puntosAtencion: any = []


  region: Region = {
    id_region: 0,
    nombre_region: ''
  }

  regiones: any = []
  error: any; 
  countUsuarios: any = {}

  usuario : Usuarios = {
    dpi: 0,
    nombre_usuario: '',
    correo_usuario: '',
    cargo_usuario: '',
    region: 0,
    id_puntosdeatencion: 0,
    estado_usuario: 1,
    fecha_creacion: new Date(),
    password: ''
    
  }

  constructor(private catalogosService: CatalogosService, private ruta: Router) { }

  ngOnInit(): void {
    this.autorizacion = false;
    this.token = this.catalogosService.getToken();
    if(this.token != null){
      this.autorizacion = true;
      this.catalogosService.getRegiones().subscribe(
        res =>{
          this.regiones = res;
          console.log(this.regiones)
        },
        err =>{
          console.log(err)
        }
      )
    } else {
      this.ruta.navigate(['/inicio'])
    }
  }

  resetForm(form?: NgForm){
    form.reset();
  }
  guardar(){
    var region = this.puntoAtencion.region_puntodeatencion.split(".");
    this.puntoAtencion.region_puntodeatencion = region[0];
    this.puntoAtencion.nombre_puntodeatencion = this.puntoAtencion.nombre_puntodeatencion.trim();
    this.puntoAtencion.estado_puntodeatencion = 1;
    console.log(this.puntoAtencion)
    this.catalogosService.postPuntosAtencion(this.puntoAtencion).subscribe(
      res =>{
        console.log(res)
        alert("Se guardo correctamente los datos del punto de atención " + this.puntoAtencion.nombre_puntodeatencion);
        location.reload()
      },
      err =>{
        this.error = err;
        console.log("Error: " + this.error.error)
      }
    )

  }

  buscar(id_region, nombre_region){
    this.catalogosService.buscarPuntoAtencionRegion(id_region).subscribe(
      res=>{
        this.puntosAtencion = res;
        console.log(res)
      },
      err =>{
        console.log(err)
      }
    )
    this.puntoAtencion.region_puntodeatencion = nombre_region
  }

  establecerValores(id, nombre_puntodeatencion){
    this.puntoAtencion.id = id; 
    this.puntoAtencion.nombre_puntodeatencion = nombre_puntodeatencion
  }

  async actualizar(nombre_puntodeatencion, estado_puntodeatencion){
    this.puntoAtencion.nombre_puntodeatencion = nombre_puntodeatencion.trim();
    var totalUsuarios;
    if(estado_puntodeatencion == "Inactivo"){
      //Consulta a tabla usuarios para total de usuarios del punto de atencion
      await this.catalogosService.buscarUsuariosIdPA(this.puntoAtencion.id).toPromise().then(
        res =>{
          this.countUsuarios = res;
          totalUsuarios = this.countUsuarios.length;
          console.log(totalUsuarios)
        }
      ).catch(
        err =>{
          console.log(err)
        }
      )
      var confirmacionInactivar = confirm("Existen " + totalUsuarios + " cantidad de usuarios asociados al punto de atención, TODOS los usuarios serán automáticamente inactivados ¿Continua con el proceso de Inactivación del Punto de Atención?");
      if(confirmacionInactivar){
        //Proceder a inactivar usuarios
        await this.catalogosService.inactivarUsuarios(this.puntoAtencion.id, this.usuario).toPromise().then(
          res=>{
            console.log(res)
          }
        ).catch(
          err =>{
            console.log(err);
            alert("Error al inabilitar usuarios")
          }
        )
        this.puntoAtencion.estado_puntodeatencion = 0
      } else if(!confirmacionInactivar) {
        location.reload();
      }
    } else {
      this.puntoAtencion.estado_puntodeatencion = 1
    }
    this.catalogosService.actualizarPuntoAtencion(this.puntoAtencion.id, this.puntoAtencion).subscribe(
      res =>{
        console.log(res);
        alert("Datos actualizados");
        location.reload();
      },
      err =>{
        console.log(err);
        alert("Error al actualizar")
      }
    )
  }



}
