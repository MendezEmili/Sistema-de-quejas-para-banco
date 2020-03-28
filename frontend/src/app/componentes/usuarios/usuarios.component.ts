import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective , Validators} from '@angular/forms';
import { NgForm } from '@angular/forms'

//Importar rutas para consumo de servicios 
import {CatalogosService} from '../../servicios/catalogos.service';

//Importar modelos
import {Usuarios} from '../../modelos/usuarios';
import {PuntosAtencion} from '../../modelos/puntos-atencion';
import { Region } from '../../modelos/region';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})


export class UsuariosComponent implements OnInit {

  usuario : Usuarios = {
    dpi: 0,
    nombre_usuario: '',
    correo_usuario: '',
    cargo_usuario: '',
    region: 0,
    id_puntosdeatencion: 0,
    estado_usuario: 1,
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

  constructor(private catalogosServices: CatalogosService) { }

  ngOnInit(): void {
    this.catalogosServices.getRegiones().subscribe(
      res =>{
        this.regiones = res;
        console.log(this.regiones)
      },
      err =>{
        console.log(err)
      }
    )
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
 
    console.log(this.usuario)
    this.catalogosServices.postUsuarios(this.usuario).subscribe(
      res =>{
        console.log(res)
        alert("Se guardo correctamente los datos del usuario" + this.usuario.nombre_usuario);
      },
      err =>{
        this.error = err;
        console.log("Error: " + this.error.error);
        alert(this.error.error)
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
    this.usuario.id_puntosdeatencion = id; 
  }
}