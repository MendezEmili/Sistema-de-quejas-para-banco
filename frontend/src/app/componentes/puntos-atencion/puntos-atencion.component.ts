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
    nombre: '',
    estado: 0,
    region: ''
  }

  puntosAtencion: any = []


  region: Region = {
    id: 0,
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
    var region = this.puntoAtencion.region.split(".");
    this.puntoAtencion.region = region[0];
    this.puntoAtencion.nombre = this.puntoAtencion.nombre.trim();
    this.puntoAtencion.estado = 1;
    console.log(this.puntoAtencion)
    this.catalogosService.postPuntosAtencion(this.puntoAtencion).subscribe(
      res =>{
        console.log("Insertado")
        alert("Se guardo correctamente los datos del punto de atención " + this.puntoAtencion.nombre);
      },
      err =>{
        this.error = err;
        console.log("Error: " + this.error.error)
      }
    )

  }

}
