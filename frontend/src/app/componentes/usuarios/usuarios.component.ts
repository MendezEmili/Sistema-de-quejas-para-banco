import { Component, OnInit } from '@angular/core';
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
    id_puntosdeatencion: 1,
    estado_usuario: 1
    
  }
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
    var usuario = this.usuario.dpi=this.usuario.dpi;
    this.usuario.nombre_usuario=this.usuario.nombre_usuario.trim();
    this.usuario.correo_usuario=this.usuario.correo_usuario.trim();
    this.usuario.cargo_usuario=this.usuario.cargo_usuario;
    this.usuario.region=this.usuario.region;
    this.usuario.id_puntosdeatencion = 1; 
    this.usuario.estado_usuario = 1;
    console.log(this.usuario)
    this.catalogosServices.postUsuarios(this.usuario).subscribe(
      res =>{
        console.log(res)
        alert("Se guardo correctamente los datos del usuario" + this.usuario.nombre_usuario);
      },
      err =>{
        this.error = err;
        console.log("Error: " + this.error.error)
      }
    )

  }

}