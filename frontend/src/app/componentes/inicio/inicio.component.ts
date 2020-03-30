import { Component, OnInit } from '@angular/core';

//Importar servicios 
import { CatalogosService } from '../../servicios/catalogos.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  autorizacion: boolean;
  token: any;

  constructor(private catalogosService: CatalogosService, private ruta: Router) { }

  ngOnInit(): void {
    this.autorizacion = false;
    this.token = this.catalogosService.getToken();
    if(this.token != null){
      this.autorizacion = true;
    }
  }

  login(){
    this.catalogosService.setToken("valido");
    location.reload();    
  }

  logout(){
    this.catalogosService.logout();
    location.reload(); 
  }

}
