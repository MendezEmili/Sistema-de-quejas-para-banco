import { Component, OnInit } from '@angular/core';
import { CatalogosService } from 'src/app/servicios/catalogos.service';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';

//modelos 
import { Queja } from '../../modelos/queja'

//Reportes PDF
import { PdfMakeWrapper, Txt, Table, Columns } from 'pdfmake-wrapper';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  token: any;
  quejas: any = [];
  reporteNoQueja: boolean = false; 
  reporteFechas: boolean = false;

  queja: Queja = {
    id_queja: 0,
    tipo_queja: '',
    ingreso_queja: ''
  }

  constructor(private catalogosService: CatalogosService, private ruta: Router) { }

  ngOnInit(): void {
    this.token = this.catalogosService.getToken();
    if(this.token == "valido"){

    } else {
      this.ruta.navigate(['/home'])
    }
  }

  generarPDF(){
    const pdf = new PdfMakeWrapper();
    pdf.header(
      new Txt('REPORTE DE QUEJAS POR MAL SERVICIO O SERVICIO NO CONFORME').bold().alignment('center').end
    )

    pdf.footer(
      new Txt('Universidad Mariano Gálvez -2020- Roberto Marín && Emili Méndez').alignment('center').end
    )
    pdf.pageOrientation('landscape');
    pdf.pageMargins(40)
    pdf.add(
      new Table([
        ['No. ', 'Tipo', 'Punto de atención', 'Estado', 'Etapa', 'Resultado', 'Medio de ingreso', 'Fecha de creación', 'Tiempo de atención', 'Detalle']
      ]).end
    );
    this.catalogosService.reporteNoQueja(this.queja.tipo_queja, this.queja.id_queja, 2020).subscribe(
      res=>{
        console.log(res);
        this.quejas = res;   
        for(let i = 0; i<this.quejas.length; i++){
          pdf.add(
            new Table([[this.quejas[i].id_queja, this.quejas[i].tipo_queja, this.quejas[i].nombre_puntodeatencion, this.quejas[i].estado, this.quejas[i].estado_i, this.quejas[i].descripcion_medio, this.quejas[i].resultado, this.quejas[i].fecha_ingreso, this.quejas[i].detalle_queja]]).end
          )
        }     
        pdf.create().open();
      }
    )
    
  }
  
  resetForm(form?: NgForm){
    form.reset();
  }

}
