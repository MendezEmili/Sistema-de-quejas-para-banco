import { Component, OnInit } from '@angular/core';
//Importar servicio
import { CatalogosService } from 'src/app/servicios/catalogos.service';

//Importar modelos 
import { Queja } from '../../modelos/queja';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quejas-igresadas',
  templateUrl: './quejas-igresadas.component.html',
  styleUrls: ['./quejas-igresadas.component.css']
})
export class QuejasIgresadasComponent implements OnInit {

  autorizacion: boolean = false;
  token: any; 
  error: any; 

  queja: Queja ={
    id_queja: 0,
    medio_ingreso_queja: 0,
    nombre: '',
    correo: '',
    telefono: 0,
    oficina: 0,
    nombre_empleado: 0,
    detalle_queja: '',
    ingreso_queja: '',
    estado_externo: 0,
    estado_interno: 0,
    tipo_queja: '',
    resultado: ''
  }
  quejas: any = []

  constructor(private catalogosService: CatalogosService, private ruta: Router) { }

  ngOnInit(): void {
    this.autorizacion = false;
    this.token = this.catalogosService.getToken();
    if(this.token == "valido"){
      this.autorizacion = true;
      this.catalogosService.quejasPresentadas().subscribe(
        res=>{
          this.quejas = res;
          console.log(res)
        }, 
        err =>{
          this.error = err;
          alert(this.error.error)
        }
      )
    } else {
      this.ruta.navigate(['/home'])
    }
  }

}
