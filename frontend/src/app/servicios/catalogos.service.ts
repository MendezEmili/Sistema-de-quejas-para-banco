import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PuntosAtencion } from '../modelos/puntos-atencion';
import { Usuarios } from '../modelos/usuarios';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {
  baseURL = environment.backendURL;

  URL_API_PA = this.baseURL + 'puntosdeatencion/';
  URL_API_R = this.baseURL + 'region/';
  URL_API_US= this.baseURL + 'usuarios/'

  constructor(private http: HttpClient) { }

  //Catalogo de Puntos de atencion 
  postPuntosAtencion(puntoAtencion: PuntosAtencion){
    return this.http.post(`${this.URL_API_PA}insertar`, puntoAtencion);
  }

  buscarPuntoAtencionID(id: number){
    return this.http.get(`${this.URL_API_PA}buscar/${id}`);
  }

  buscarPuntoAtencionRegion(region){
    return this.http.get(`${this.URL_API_PA}buscarregion/${region}`);
  }

  actualizarPuntoAtencion(id, puntoAtencion: PuntosAtencion){
    return this.http.put(`${this.URL_API_PA}actualizar/${id}`, puntoAtencion);
  }

  //Regiones 
  getRegiones(){
    return this.http.get(`${this.URL_API_R}obtener`);
  }
  
  getRegionID(id_region){
    return this.http.get(`${this.URL_API_R}buscar/${id_region}`);
  }

  //catalogo de usuarios
  postUsuarios(usuarios:Usuarios){
    return this.http.post(`${this.URL_API_US}insertar`,usuarios);
  }

  contarUsuarios(id){
    return this.http.get(`${this.URL_API_US}contar/${id}`);
  }

  inactivarUsuarios(id, usuarios: Usuarios){
    return this.http.put(`${this.URL_API_US}/inactivar/${id}`, usuarios);
  }

  buscarUsuarioDPI(dpi){
    return this.http.get(`${this.URL_API_US}buscar/${dpi}`)
  }
}
