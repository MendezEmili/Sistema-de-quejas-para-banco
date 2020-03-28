import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
//Servicios
import { CatalogosService } from 'src/app/servicios/catalogos.service';


//Modelos 
import { Region } from '../../../modelos/region';
import { PuntosAtencion } from '../../../modelos/puntos-atencion';
import { Usuarios } from '../../../modelos/usuarios'


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  puntoAtencion: PuntosAtencion ={
    id: 0,
    nombre_puntodeatencion: '',
    estado_puntodeatencion: 0,
    region_puntodeatencion: ''
  }

  puntosAtencion: any = {}

  region: Region ={
    id_region: 0,
    nombre_region: ''
  }
  regiones: any = {}
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

  constructor(private catalogosService: CatalogosService, private router: Router) { }

  ngOnInit(): void {
    this.catalogosService.getRegiones().subscribe(
      res =>{
        this.regiones = res;
        console.log(this.regiones)
      },
      err =>{
        console.log(err)
      }
    )
  }

  guardar(){

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

  establecerValores(id, nombre_puntodeatencion, estado_puntodeatencion){
    this.puntoAtencion.id = id; 
    this.puntoAtencion.nombre_puntodeatencion = nombre_puntodeatencion
  }

  async actualizar(nombre_puntodeatencion, estado_puntodeatencion){
    this.puntoAtencion.nombre_puntodeatencion = nombre_puntodeatencion.trim();
    var totalUsuarios;
    if(estado_puntodeatencion == "Inactivo"){
      //Consulta a tabla usuarios para total de usuarios del punto de atencion
      await this.catalogosService.contarUsuarios(this.puntoAtencion.id).toPromise().then(
        res =>{
          this.countUsuarios = res;
          totalUsuarios = this.countUsuarios 
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
        this.router.navigate(['/puntosatencion']);
        return 0;
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
