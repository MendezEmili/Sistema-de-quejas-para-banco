import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective , Validators} from '@angular/forms';
import { NgForm } from '@angular/forms'

//Importar rutas para consumo de servicios 
import {CatalogosService} from '../../servicios/catalogos.service';

//Importar modelos
import {Usuarios} from '../../modelos/usuarios';
import {PuntosAtencion} from '../../modelos/puntos-atencion';
import { Region } from '../../modelos/region';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})


export class UsuariosComponent implements OnInit {
  token: any; 

  usuario : Usuarios = {
    dpi: 0,
    nombre_usuario: '',
    correo_usuario: '',
    cargo_usuario: '',
    region: 0,
    id_puntosdeatencion: 0,
    estado_usuario: 1,
    password:'',
    fecha_creacion: new Date()
    
  }

  puntoAtencion: PuntosAtencion ={
    id: 0,
    nombre_puntodeatencion: '',
    estado_puntodeatencion: 0,
    region_puntodeatencion: ''
  }

  puntosAtencion:any=[]
  usuarios:any=[]
  regiones:any=[]
  error:any;
  usuarioDPI: any;
  nombre: any;

  constructor(private catalogosServices: CatalogosService, private ruta:Router) { }

  ngOnInit(): void {
    this.token = this.catalogosServices.getToken();
    if(this.token == "valido"){
      this.catalogosServices.getRegiones().subscribe(
        res =>{
          this.regiones = res;
          console.log(this.regiones)
        },
        err =>{
          console.log(err)
        }
      )
    } else {
      this.ruta.navigate(['/home'])
    }
 
  }

  resetForm(form?: NgForm){
    form.reset();
  }
  
  
  
  guardar(){
   
    this.usuario.dpi=this.usuario.dpi;
    this.usuario.nombre_usuario=this.usuario.nombre_usuario.trim();
    this.usuario.correo_usuario=this.usuario.correo_usuario.trim();
    this.usuario.cargo_usuario=this.usuario.cargo_usuario;
    this.usuario.region=this.usuario.region;
    this.usuario.estado_usuario = 1;
    var fecha=Date.now();
    this.usuarios.fecha=this.usuarios.fecha_creacion;
    this.usuarios.password=this.usuarios.password;
    console.log(this.usuario)
    /*this.catalogosServices.postUsuarios(this.usuario).subscribe(
      res =>{
        console.log(res)
        alert("Se guardo correctamente los datos del usuario" + this.usuario.nombre_usuario);
      },
      err =>{
        this.error = err;
        console.log("Error: " + this.error.error);
        alert(this.error.error)
      }
    )*/
    this.catalogosServices.buscarUsuarioDPI(this.usuario.dpi).subscribe(
      res=>{
        this.usuarioDPI = res; 
        if(this.usuarioDPI.length >0){
          this.catalogosServices.buscarPuntoAtencionID(this.usuarioDPI[0].id_puntosdeatencion).subscribe(
            res =>{
              this.nombre = res; 
              alert("Error al guardar datos, el usuario existe en el punto de atencion" + this.nombre.nombre_puntodeatencion)
            }, 
            err =>{
              console.log(err)
            }
          )
        
        } else {
          this.catalogosServices.postUsuarios(this.usuario).subscribe(
            res =>{
              console.log(res)
              alert("Se guardo correctamente los datos del usuario para el punto de atencion" );
              location.reload();
            },
            err =>{
              this.error = err;
              console.log("Error: " + this.error.error);
              alert(this.error.error)
            }
          )
        }
      }, 
      err=>{
        console.log(err)
        alert("Error al verificar usuario")
      }
    )

  }


  buscar(id_region, nombre_region){
    this.usuario.region = id_region;
    this.catalogosServices.buscarPuntoAtencionRegion(id_region).subscribe(
      res=>{
        this.puntosAtencion = res;
        console.log(res)
      },
      err =>{
        console.log(err)
      }
    )
    this.puntosAtencion.region_puntodeatencion = nombre_region
  }

  establecerValores(id){
    this.puntoAtencion.id = id;
    this.usuario.id_puntosdeatencion = id;
  }

  establecerValores2(dpi, correo, cargo, estado){
    this.usuario.dpi = dpi;
    this.usuario.correo_usuario = correo;
    this.usuario.cargo_usuario = cargo;
    this.usuario.estado_usuario = estado;
  }

 //ESTO ME HACE FALTA, NO SE SI ESTA BIEN PORQUE NO LOGRO
 //CONECTAR CON EL FRONTEND, o bueno lo hago mal jaja
 

 buscarPaUsuario(id_puntosdeatencion, nombre_puntodeatencion){
    this.usuario.nombre_usuario=id_puntosdeatencion;
    this.catalogosServices.buscarUsuariosIdPA(id_puntosdeatencion).subscribe(
      res =>{
        this.usuarios=res;
        console.log(res)
      },
      err=>{
        console.log(err)
      }
    )
      this.puntosAtencion.region_puntodeatencion=nombre_puntodeatencion
  }

  actualizar(estado){
    if(estado == "Activo"){
      this.usuario.estado_usuario = 1;
    } else {
      this.usuario.estado_usuario = 0;
    }
    this.catalogosServices.actualizarUsuarioDPI(this.usuario.dpi, this.usuario).subscribe(
      res =>{
        alert("Se modificaron correctamente los datos del usuario del punto de atencion");
        console.log(res)
        location.reload();
      },
      err =>{
        alert("Error al actualizar");
        console.log(err)
      }
    )
  }


}