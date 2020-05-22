import { Component, OnInit } from '@angular/core';
import { CatalogosService } from 'src/app/servicios/catalogos.service';
import { Router } from '@angular/router';

//Reportes PDF
import { PdfMakeWrapper, Txt } from 'pdfmake-wrapper';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  token: any;

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
      new Txt('REPORTE DE QUEJAS POR MAL SERVICIO O SERVICIO NO CONFORME').bold().end
    )

    pdf.footer(
      new Txt('Universidad Mariano Gálvez -2020- Roberto Marín && Emili Méndez').end
    )

    pdf.pageMargins([ 80, 60, 40, 60 ]);

    pdf.add(
      new Txt('Hola Mundo').end
    );

    pdf.create().open();
  }

}
