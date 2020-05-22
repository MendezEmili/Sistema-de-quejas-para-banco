import { Component, OnInit } from '@angular/core';
import { CatalogosService } from 'src/app/servicios/catalogos.service';
import { Router } from '@angular/router';

//Reportes PDF
import { PdfMakeWrapper, Txt, Table, Columns } from 'pdfmake-wrapper';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  token: any;
  queja: any = [];

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
    this.catalogosService.reporteNoQueja("QMS", 6, 2020).subscribe(
      res=>{
        console.log(res);
        this.queja = res;   
        for(let i = 0; i<this.queja.length; i++){
          pdf.add(
            new Table([[this.queja[i].id_queja, this.queja[i].tipo_queja, this.queja[i].nombre_puntodeatencion, this.queja[i].estado, this.queja[i].estado_i, this.queja[i].descripcion_medio, this.queja[i].resultado, this.queja[i].fecha_ingreso, this.queja[i].detalle_queja]]).end
          )
        }     
        pdf.create().open();
      }
    )
    
  }

}
