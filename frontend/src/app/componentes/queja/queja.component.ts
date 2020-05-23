import { Component, OnInit } from '@angular/core';
import { NgForm, ReactiveFormsModule } from '@angular/forms';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { RecaptchaModule } from 'ng-recaptcha';
import { MedioIngreso } from '../../modelos/medio-ingreso';
import { PuntosAtencion } from '../../modelos/puntos-atencion';
import { Queja } from '../../modelos/queja';
import { CatalogosService } from 'src/app/servicios/catalogos.service';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-queja',
  templateUrl: './queja.component.html',
  styleUrls: ['./queja.component.css'],
  template: `<re-captcha (resolved)="resolved($event)" siteKey="6LcaCfsUAAAAAIGB129_oMhbh_7CpHPIzPK-Cthd"></re-captcha>`
})
export class QuejaComponent implements OnInit {

  autorizacion: boolean;
  ingresoQueja: boolean;
  autocaptcha: boolean=false;
  
  error: any;
  recaptcha:any[];
  
  medioIngreso: MedioIngreso = {
    id_medio_ingreso_queja: 0,
    descripcion_medio: ''
  }
  mediosIngreso: any = [];

  puntoAtencion: PuntosAtencion ={
    id: 0,
    nombre_puntodeatencion: '',
    estado_puntodeatencion: 0,
    region_puntodeatencion: ''
  }
  puntosAtencion: any = [];

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
    this.ingresoQueja = false;
    var token = this.catalogosService.getToken();
    if(token == "valido"){
      this.autorizacion = true;
    } else{
      this.autorizacion = false;
    }
  }

  actualizar(){

  }

  buscar(){

  }

  guardar(medio_queja, oficina){
    var medio_queja = medio_queja.split(".");
    this.queja.medio_ingreso_queja = medio_queja[0];
    var oficina = oficina.split(".")
    this.queja.oficina = oficina[0]

    this.queja.estado_externo = 1;
    this.queja.estado_interno = 1;
    this.queja.tipo_queja = "QMS";
    if(this.autorizacion){
      this.queja.ingreso_queja = "Menú aplicación";
      this.queja.resultado = "Ingresada exitosamente su queja";
    } else {
      this.queja.ingreso_queja = "Portal";
      this.queja.resultado = "Ingresada exitosamente a través de la aplicación movil"
    }
    
    this.catalogosService.insertarQueja(this.queja).subscribe(
      res =>{
        console.log(res)
        alert(this.queja.resultado);
        location.reload();
      }, 
      err =>{
        this.error = err;
        console.log(err);
        alert(this.error.error)
      }
    )
  }


  ingresarQueja(){
    this.autocaptcha=true;

   if (this.recaptcha!=null){
    this.ingresoQueja = true;
    this.autocaptcha=false;

    this.catalogosService.obtenerMediosIngreso().subscribe(
      res =>{
        this.mediosIngreso = res;
      }, 
      err =>{
        this.error = err; 
        alert(this.error.error);
      }
    )
    this.catalogosService.obtenerPuntosAtencion().subscribe(
      res =>{
        this.puntosAtencion = res;
      },
      err =>{
        this.error = err;
        alert(this.error.error)
      }
    )
   }
  }

  resetForm(form?: NgForm){
    form.reset();
  }

  salir(){
    location.reload();
  }

  public files: NgxFileDropEntry[] = [];
 
  public dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
 
      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
 
          // Here you can access the real file
          console.log(droppedFile.relativePath, file);
 
          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)
 
          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })
 
          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/
 
        });
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }
  }
 
  public fileOver(event){
    console.log(event);
  }
 
  public fileLeave(event){
    console.log(event);
  }
  
 



resolved(captchaResponse:any[]){
  this.recaptcha=captchaResponse;
  console.log(this.recaptcha);
}



}
