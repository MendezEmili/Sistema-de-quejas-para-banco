import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PuntosAtencion } from '../modelos/puntos-atencion';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {
  baseURL = environment.backendURL;

  URL_API_PA = this.baseURL + 'puntosdeatencion/';
  URL_API_R = this.baseURL + 'region/'

  constructor(private http: HttpClient) { }

  //Catalogo de Puntos de atencion 
  postPuntosAtencion(puntoAtencion: PuntosAtencion){
    console.log(puntoAtencion);
    return this.http.post(`${this.URL_API_PA}insertar`, puntoAtencion);
  }

  buscarPuntoAtencionID(id: number){
    return this.http.get(`${this.URL_API_PA}buscar/${id}`);
  }

  //Regiones 
  getRegiones(){
    return this.http.get(`${this.URL_API_R}obtener`);
  }

}
