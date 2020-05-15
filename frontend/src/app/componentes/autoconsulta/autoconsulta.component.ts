import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { CatalogosService } from 'src/app/servicios/catalogos.service';

//Modelos
import { TipoQueja } from '../../modelos/tipo-queja';

@Component({
  selector: 'app-autoconsulta',
  templateUrl: './autoconsulta.component.html',
  styleUrls: ['./autoconsulta.component.css']
})
export class AutoconsultaComponent implements OnInit {

  error: any; 

  tipoQueja: TipoQueja ={
    siglas: '',
    descripcion_tq: '',
    estado_tq: 0
  }

  tiposQueja: any = []

  constructor(private catalogosService: CatalogosService) { }

  ngOnInit(): void {
    this.catalogosService.obtenerTiposQueja().subscribe(
      res =>{
        this.tiposQueja = res; 
        console.log(this.tiposQueja)
      }, 
      err => {
        this.error = err; 
        alert(this.error.error)
      }
    )
  }

}
