import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

//Importar rutas para consumo de servicios 
import { CatalogosService } from '../../servicios/catalogos.service';

//Importar modelos 
import { PuntosAtencion } from '../../modelos/puntos-atencion'
import { Region } from '../../modelos/region';

@Component({
  selector: 'app-puntos-atencion',
  templateUrl: './puntos-atencion.component.html',
  styleUrls: ['./puntos-atencion.component.css']
})
export class PuntosAtencionComponent implements OnInit {

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

  constructor(private catalogosService: CatalogosService) { }

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


}
