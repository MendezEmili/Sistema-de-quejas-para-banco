import { Component, OnInit } from '@angular/core';
import { PuntosAtencion } from '../../modelos/puntos-atencion'
import { NgForm } from '@angular/forms'

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

  constructor() { }

  ngOnInit(): void {
  }

  resetForm(form?: NgForm){
    form.reset();
  }
  guardar(){
    this.puntoAtencion.estado = 1;
    console.log(this.puntoAtencion)

  }

}
