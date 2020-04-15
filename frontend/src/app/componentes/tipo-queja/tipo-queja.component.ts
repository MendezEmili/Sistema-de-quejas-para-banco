import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms'

//Importar interface
import { TipoQueja } from '../../modelos/tipo-queja';

//Importar Servicio
import { CatalogosService } from '../../servicios/catalogos.service';

@Component({
  selector: 'app-tipo-queja',
  templateUrl: './tipo-queja.component.html',
  styleUrls: ['./tipo-queja.component.css']
})
export class TipoQuejaComponent implements OnInit {
  error: any;
  respuesta: any; 

  tipoQueja: TipoQueja ={
    siglas: '',
    descripcion_tq: '',
    estado_tq: 0
  }

  tiposQueja: any = [];
  queja: any = [];
  
  constructor(private catalogosService: CatalogosService) { }

  ngOnInit(): void {
    this.catalogosService.obtenerTiposQueja().subscribe(
      res =>{
        this.tiposQueja = res;
      },
      err =>{
        console.log(err);
        alert("Error en tipos de quejas")
      }
    )
  }

  guardar(){
    var confirmar = confirm("¿Está seguro de que desea guardar el tipo de queja ingresada?");
    if(confirmar){
      this.tipoQueja.estado_tq = 1;
      this.catalogosService.insertarTipoQueja(this.tipoQueja).subscribe(
        res =>{
          console.log(res);
          this.respuesta = res;
          alert(this.respuesta.mensaje);
          location.reload();
        }, 
        err =>{
          this.error = err; 
          console.log(err)
          alert(this.error.error)
        }
      )
    }
  }

  resetForm(form?: NgForm){
    form.reset();
  }

  actualizar(siglas, descripcion_tq, estado){
    if(estado == "Inactivo"){
      this.tipoQueja.estado_tq = 0;
    } else{
      this.tipoQueja.estado_tq = 1;
    }
    this.tipoQueja.descripcion_tq = descripcion_tq;
    this.tipoQueja.siglas = siglas;
    console.log(this.tipoQueja)
    this.catalogosService.actualizarTipoQueja(siglas, this.tipoQueja).subscribe(
     res =>{
       this.respuesta = res; 
       alert(this.respuesta.mensaje);
       location.reload();
     },
     err =>{
       this.error = err; 
       alert(this.error.error);
     }
    )

  }

  establecerValores(descripcion_tq, siglas){
    console.log(descripcion_tq)
    this.tipoQueja.descripcion_tq = descripcion_tq;
    this.tipoQueja.siglas = siglas;
  }

  buscarPorSiglas(siglas){
   this.catalogosService.buscarTipoQuejaSiglas(siglas).subscribe(
     res =>{
       this.queja = res; 
     }, 
     err =>{
       console.log(err);
       alert("Error en la queja solicitada")
     }
   )
  }

}
