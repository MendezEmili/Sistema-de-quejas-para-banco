import { Component, OnInit } from '@angular/core';
import {Usuarios} from '../../modelos/usuarios';
import { NgForm } from '@angular/forms'


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuario : Usuarios = {
    dpi: 0,
    nombre: '',
    correo: '',
    cargo: '',
    region: '',
    puntoAtencion:'',
    estado:0
    
  }

  constructor() { }

  ngOnInit(): void {
  }

  resetForm(form?: NgForm){
    form.reset();
  }

  guardar(){
    this.usuario.estado = 1;
    console.log(this.usuario)

  }

}