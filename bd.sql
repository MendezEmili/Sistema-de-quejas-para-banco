create database mipistio;
use mipistio;

create table regiones(
    id_region int AUTO_INCREMENT PRIMARY key not null,
    nombre_region varchar (20) not null
    );

create TABLE puntosdeatencion(
    id int AUTO_INCREMENT not null PRIMARY key,
 	nombre_puntodeatencion varchar (50) not null,
    estado_puntodeatencion int (2) not null,
    region_puntodeatencion int (10) not null,
    FOREIGN KEY (region_puntodeatencion) REFERENCES regiones (id_region)
);

create table rol( 
    id_rol int AUTO_INCREMENT PRIMARY key,
    tipo_rol varchar (30)
);



create table usuarios(
 	dpi int (15) primary key,
    nombre_usuario varchar (50) not null,
    correo_usuario varchar (50) not null, 
    estado_usuario varchar (40) not null,
    region int (10) NOT null,
    id_puntosdeatencion int AUTO_INCREMENT not null,
    FOREIGN KEY (id_puntosdeatencion) REFERENCES puntosdeatencion (id),
    FOREIGN KEY (region) REFERENCES regiones (id_region)

);
    

create TABLE usuario_rol(
  id_userol int AUTO_INCREMENT not null primary key,
  id_rol int (20) not null,
  dpi int (15) not null,
  FOREIGN key (id_rol) REFERENCES rol (id_rol),
  FOREIGN key (dpi) REFERENCES usuarios (dpi)
);

CREATE table tiposqueja(
    siglas varchar (10) not null PRIMARY KEY,
    descripcion_tq varchar (100) not null,
    estado_tq int (2) not null, 
    fecha_queja DATE not null );