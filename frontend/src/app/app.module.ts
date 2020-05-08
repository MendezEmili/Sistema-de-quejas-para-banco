import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { NgxFileDropModule} from 'ngx-file-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { PuntosAtencionComponent } from './componentes/puntos-atencion/puntos-atencion.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HomeComponent } from './componentes/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TipoQuejaComponent } from './componentes/tipo-queja/tipo-queja.component';
import { QuejaComponent } from './componentes/queja/queja.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    PuntosAtencionComponent,
    InicioComponent,
    HomeComponent,
    FooterComponent,
    TipoQuejaComponent,
    QuejaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxFileDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
