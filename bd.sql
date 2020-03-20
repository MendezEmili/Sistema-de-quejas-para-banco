create TABLE puntosdeatencion(
    id int (20) not null PRIMARY key,
 	nombre_puntodeatencion varchar (50) not null,
    estado_puntodeatencion int (2) not null,
    region_puntodeatencion varchar (10) not null
);

create table rol( id_rol int AUTO_INCREMENT PRIMARY key, tipo_rol varchar (30));

create table usuarios(
 	dpi int (15) primary key,
    nombre_usuario varchar (50) not null,
    correo_usuario varchar (50) not null, 
    estado_usuario varchar (40) not null,
    region varchar (50) NOT null,
    id_puntosdeatencion int (20) not null,
    FOREING KEY (id_puntosdeatencion) REFERENCES puntosdeatencion (id)
    
    );
    

CREATE table tiposqueja( siglas varchar (10) not null PRIMARY KEY, descripcion_tq varchar (100) not null, estado_tq int (2) not null, fecha_queja DATE not null );
