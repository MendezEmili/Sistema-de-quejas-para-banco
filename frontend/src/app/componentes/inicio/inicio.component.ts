import { Component, OnInit } from '@angular/core';

//Importar servicios 
import { CatalogosService } from '../../servicios/catalogos.service'
import { Router } from '@angular/router';

//importar modelos
import {Usuarios} from '../../modelos/usuarios';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {

  autorizacion: boolean;
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
  constructor(private catalogosService: CatalogosService, private ruta: Router) { }


  ngOnInit(): void {
    this.autorizacion = false;
    this.token = this.catalogosService.getToken();
    if(this.token != null){
      this.autorizacion = true;
    }
  }

  login(){
    this.catalogosService.login(this.usuario.correo_usuario, this.usuario.password).subscribe(
      res=> {
        this.catalogosService.setToken("valido");
        location.reload();    
      }, 
      err=> {
        alert("Usuario No Encontrado");
      }
    )
   
   
  }

  logout(){
    this.catalogosService.logout();
    location.reload(); 
  }

}
