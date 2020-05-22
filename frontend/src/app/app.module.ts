import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { NgxFileDropModule} from 'ngx-file-drop';
import {RecaptchaModule} from 'ng-recaptcha';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { PuntosAtencionComponent } from './componentes/puntos-atencion/puntos-atencion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HomeComponent } from './componentes/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TipoQuejaComponent } from './componentes/tipo-queja/tipo-queja.component';
import { QuejaComponent } from './componentes/queja/queja.component';
import { AutoconsultaComponent } from './componentes/autoconsulta/autoconsulta.component';
import { QuejasIgresadasComponent } from './componentes/quejas-igresadas/quejas-igresadas.component';
import { SeguimientoQuejasAsignadasComponent } from './componentes/seguimiento-quejas-asignadas/seguimiento-quejas-asignadas.component';
import { QuejasProcesoAtencionComponent } from './componentes/quejas-proceso-atencion/quejas-proceso-atencion.component';
import { ReporteComponent } from './componentes/reporte/reporte.component';

import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    PuntosAtencionComponent,
    InicioComponent,
    HomeComponent,
    FooterComponent,
    TipoQuejaComponent,
    QuejaComponent,
    AutoconsultaComponent,
    QuejasIgresadasComponent,
    SeguimientoQuejasAsignadasComponent,
    QuejasProcesoAtencionComponent,
    ReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxFileDropModule,
    RecaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
