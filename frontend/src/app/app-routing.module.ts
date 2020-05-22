import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { HomeComponent } from './componentes/home/home.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PuntosAtencionComponent } from './componentes/puntos-atencion/puntos-atencion.component';
import { TipoQuejaComponent } from './componentes/tipo-queja/tipo-queja.component';
import { QuejaComponent } from './componentes/queja/queja.component';
import { AutoconsultaComponent } from './componentes/autoconsulta/autoconsulta.component';
import { QuejasIgresadasComponent } from './componentes/quejas-igresadas/quejas-igresadas.component';
import { SeguimientoQuejasAsignadasComponent } from './componentes/seguimiento-quejas-asignadas/seguimiento-quejas-asignadas.component';
import { QuejasProcesoAtencionComponent } from './componentes/quejas-proceso-atencion/quejas-proceso-atencion.component';

const routes: Routes = [
  {
    path: 'usuarios',
    component: UsuariosComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'puntosatencion',
    component: PuntosAtencionComponent
  },
  {
    path: 'tipoqueja',
    component: TipoQuejaComponent
  },
  {
    path: 'queja',
    component: QuejaComponent
  },
  {
    path: 'autoconsulta',
    component: AutoconsultaComponent
  },
  {
    path: 'quejasingresadas',
    component: QuejasIgresadasComponent
  },
  {
    path: 'seguimientoquejasasignadas',
    component: SeguimientoQuejasAsignadasComponent
  }, 
  {
    path: 'quejasprocesoatencion',
    component: QuejasProcesoAtencionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
