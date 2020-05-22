import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { PuntosAtencion } from '../modelos/puntos-atencion';
import { Usuarios } from '../modelos/usuarios';
import { TipoQueja } from '../modelos/tipo-queja';
import { Queja } from '../modelos/queja';
import { AsignarQuejaPunto } from '../modelos/asignar-queja-punto';

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {
  baseURL = environment.backendURL;

  URL_API_PA = this.baseURL + 'puntosdeatencion/';
  URL_API_R = this.baseURL + 'region/';
  URL_API_US= this.baseURL + 'usuarios/';
  URL_API_TQ= this.baseURL + 'tipoqueja/';
  URL_API_LG= this.baseURL + 'auth/';
  URL_API_DQ= this.baseURL + 'detallequeja/';
  URL_API_Q = this.baseURL + 'queja/'

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

  obtenerPuntosAtencion(){
    return this.http.get(`${this.URL_API_PA}obtener`);
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

  inactivarUsuarios(id, usuarios: Usuarios){
    return this.http.put(`${this.URL_API_US}inactivar/${id}`, usuarios);
  }

  buscarUsuarioDPI(dpi){
    return this.http.get(`${this.URL_API_US}buscar/${dpi}`)
  }

  buscarUsuariosIdPA(id_puntosdeatencion){
    return this.http.get(`${this.URL_API_US}buscarusuariopunto/${id_puntosdeatencion}`)
  }

  actualizarUsuarioDPI(dpi, usuarios: Usuarios){
    return this.http.put(`${this.URL_API_US}actualizar/${dpi}`, usuarios);
  }

  //Validacion de usuario 
  setUsuario(token, rol, correo_usuario){
    localStorage.setItem("accessToken", token);
    localStorage.setItem("rol", rol);
    localStorage.setItem("correo_usuario", correo_usuario);
  }
  
  getToken(){
    return localStorage.getItem("accessToken");
  }

  getRol(){
    return localStorage.getItem("rol");
  }

  getCorreo(){
    return localStorage.getItem("correo_usuario");
  }

  login(correo_usuario, password){
    return this.http.get(`${this.URL_API_LG}login/${correo_usuario}/${password}`);
  }
  logout(){
    localStorage.removeItem("accessToken");
    localStorage.removeItem("rol");
    localStorage.removeItem("correo_usuario");
  }

  //Tipos de quejas
  insertarTipoQueja(tipoQueja: TipoQueja){
    return this.http.post(`${this.URL_API_TQ}insertar`, tipoQueja);
  }

  obtenerTiposQueja(){
    return this.http.get(`${this.URL_API_TQ}obtener`)
  }

  buscarTipoQuejaSiglas(siglas){
    return this.http.get(`${this.URL_API_TQ}buscar/${siglas}`)
  }

  actualizarTipoQueja(siglas, tipoQueja: TipoQueja){
    return this.http.put(`${this.URL_API_TQ}actualizar/${siglas}`, tipoQueja)
  }

  //Detalles de queja 
  //Estado externo
  obtenerEstadoExterno(){
    return this.http.get(`${this.URL_API_DQ}conseguiree`);
  }
  //Estado interno 
  obtenerEstadoInterno(){
    return this.http.get(`${this.URL_API_DQ}conseguirei`);
  }
  //Medios de ingreso
  obtenerMediosIngreso(){
    return this.http.get(`${this.URL_API_DQ}conseguirmi`);
  }

  //Queja 
  insertarQueja(queja: Queja){
    return this.http.post(`${this.URL_API_Q}insertar`, queja);
  }

  //Autoconsulta 
  autoconsulta(tipo_queja, id_queja, fecha){
    return this.http.get(`${this.URL_API_Q}autoconsulta/${tipo_queja}/${id_queja}/${fecha}`)
  }

  //Consultar queja para centralizador en estado = presentada 
  quejasPresentadas(){
    return this.http.get(`${this.URL_API_Q}quejaspresentadas`);
  }

  //Asignar queja a punto de atencion 
  asignarQuejaPunto(asignarQuejaPunto: AsignarQuejaPunto){
    return this.http.post(`${this.URL_API_Q}asignarquejapunto`, asignarQuejaPunto);
  }

  //actualizar estado y resultado de queja
  actualizarEstadoResultadoQueja(tipo_queja, id_queja, queja: Queja){
    console.log(queja)
    return this.http.put(`${this.URL_API_Q}actualizarestadoresultadoqueja/${tipo_queja}/${id_queja}`, queja);
  }

   //actualizar estado de queja
   actualizarEstadosQueja(tipo_queja, id_queja, queja: Queja){
    console.log(queja)
    return this.http.put(`${this.URL_API_Q}actualizarestadosqueja/${tipo_queja}/${id_queja}`, queja);
  }

  //Consultar queja asignada para un operador 
  consultarQuejaOperador(correo_usuario, estado1, estado2, estado3){
    return this.http.get(`${this.URL_API_Q}consultarquejas/${correo_usuario}/${estado1}/${estado2}/${estado3}`);
  }

  consultarQuejaAtendidas(correo_usuario, estado1, estado2, estado3){
    return this.http.get(`${this.URL_API_Q}consultarquejasatendidas/${correo_usuario}/${estado1}/${estado2}/${estado3}`);
  }


  //Reportes 
  //Reporte por numero de reporte
}