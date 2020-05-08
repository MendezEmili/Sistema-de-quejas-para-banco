create TABLE puntosdeatencion(
    id int (20) not null PRIMARY key,
 	nombre_puntodeatencion varchar (50) not null,
    estado_puntodeatencion int (2) not null,
    region_puntodeatencion varchar (10) not null
);

create table rol( id_rol int AUTO_INCREMENT PRIMARY key, tipo_rol varchar (30));

create table usuarios(
 	 dpi Bigint (15) primary key,
    nombre_usuario varchar (50) not null,
    correo_usuario varchar (50) not null, 
    estado_usuario varchar (40) not null,
    region varchar (50) NOT null,
    id_puntosdeatencion int (20) not null,
    FOREING KEY (id_puntosdeatencion) REFERENCES puntosdeatencion (id)
    
    );
    

CREATE table tiposqueja( siglas varchar (10) not null PRIMARY KEY, descripcion_tq varchar (100) not null, estado_tq int (2) not null, fecha_queja DATE not null );

create table medios_ingreso

CREATE table queja(
   id_queja int primary key AUTO_INCREMENT,
   medio_ingreso_queja int (2) not null,
   nombre varchar (50) not null,
   correo varchar (50) not null,
   telefono int (13) not null, 
   oficina int (8) not null, 
   dpi_empleado Bigint (15),
   detalle_queja varchar (1000) not null, 
   archivo longblob,
   estado_externo int(2) not null,
   estado_interno int(2) not null,
   fecha_ingreso timestamp not null,
   tipo_queja varchar(10) not null,
   ingreso_queja varchar (20) not null, 
   resultado varchar (50) not null,
   justificacion varchar(1000) not null,
)

 var sql="CREATE TABLE rol( id_rol int AUTO_INCREMENT PRIMARY key, tipo_rol varchar (30)) not null";
    var sql="CREATE TABLE puntosdeatencion (id int (20) not null PRIMARY key,nombre_puntodeatencion varchar (50) not null, estado_puntodeatencion int (2) not null,  region_puntodeatencion varchar (10) not null)";
    var sql="CREATE TABLE usuarios(dpi int (15) primary key, nombre_usuario varchar (50) not null,correo_usuario varchar (50) not null, estado_usuario varchar (40) not null,region varchar (50) NOT null,id_puntosdeatencion int (20) not null,FOREING KEY (id_puntosdeatencion) REFERENCES puntosdeatencion (id))";
    var sql="CREATE TABLE tiposqueja( siglas varchar (10) not null PRIMARY KEY, descripcion_tq varchar (100) not null, estado_tq int (2) not null, fecha_queja DATE not null )";
   