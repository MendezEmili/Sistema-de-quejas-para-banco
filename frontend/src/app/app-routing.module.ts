import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { HomeComponent } from './componentes/home/home.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PuntosAtencionComponent } from './componentes/puntos-atencion/puntos-atencion.component';
import { TipoQuejaComponent } from './componentes/tipo-queja/tipo-queja.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
