import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { CatalogosService } from 'src/app/servicios/catalogos.service';

//Modelos
import { TipoQueja } from '../../modelos/tipo-queja';
import { Queja } from '../../modelos/queja';

@Component({
  selector: 'app-autoconsulta',
  templateUrl: './autoconsulta.component.html',
  styleUrls: ['./autoconsulta.component.css']
})
export class AutoconsultaComponent implements OnInit {

  error: any; 
  estadoFinalizado: boolean = false;

  queja: Queja = {
    id_queja: 0,
    tipo_queja: '',
    ingreso_queja: ''
  }


  tipoQueja: TipoQueja = {
    siglas: '',
    descripcion_tq: '',
    estado_tq: 0
  }

  tiposQueja: any = []

  autoconsulta: any = {
    resultado: '',
    estado: '',
    fecha_ingreso: ''
  }

  autoconsultas: any = []

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

  verAutoconsulta(){
    this.catalogosService.autoconsulta(this.queja.tipo_queja, this.queja.id_queja, this.queja.ingreso_queja).subscribe(
      res =>{
        console.log(res);
        this.autoconsultas = res; 
      }, 
      err =>{
        this.error = err; 
        alert(this.error.error)
      }
    )
  }

  resetForm(form?: NgForm){
    form.reset();
  }

}
