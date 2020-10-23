-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-05-2020 a las 17:30:06
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mipistio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asignar_queja_punto`
--

CREATE TABLE `asignar_queja_punto` (
  `id_asignacion_queja_punto` int(11) NOT NULL,
  `id_queja` int(11) NOT NULL,
  `id_puntosdeatencion` int(20) NOT NULL,
  `fecha_asignacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `asignar_queja_punto`
--

INSERT INTO `asignar_queja_punto` (`id_asignacion_queja_punto`, `id_queja`, `id_puntosdeatencion`, `fecha_asignacion`) VALUES
(16, 7, 24, '2020-05-22 01:26:14'),
(17, 6, 12, '2020-05-22 01:38:54'),
(18, 12, 24, '2020-05-22 04:11:29'),
(19, 6, 24, '2020-05-22 05:38:36'),
(20, 11, 24, '2020-05-22 16:00:34'),
(21, 14, 24, '2020-05-22 17:28:56'),
(22, 14, 5, '2020-05-22 17:34:14'),
(23, 15, 24, '2020-05-23 06:49:14'),
(24, 16, 7, '2020-05-23 14:35:20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auditoria_puntosdeatencion`
--

CREATE TABLE `auditoria_puntosdeatencion` (
  `USUARIO` varchar(50) DEFAULT NULL,
  `FECHA` date DEFAULT NULL,
  `ACCION` varchar(20) DEFAULT NULL,
  `OS_USUARIO` varchar(20) DEFAULT NULL,
  `IP_USUARIO` varchar(15) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `nombre_puntodeatencion` varchar(50) NOT NULL,
  `estado_puntodeatencion` int(2) NOT NULL,
  `region_puntodeatencion` int(10) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `auditoria_puntosdeatencion`
--

INSERT INTO `auditoria_puntosdeatencion` (`USUARIO`, `FECHA`, `ACCION`, `OS_USUARIO`, `IP_USUARIO`, `id`, `nombre_puntodeatencion`, `estado_puntodeatencion`, `region_puntodeatencion`, `fecha_creacion`) VALUES
('root@localhost', '2020-05-20', 'INSERT', 'so', 'ip', 34, 'bitacora prueba', 1, 2, '2020-05-20 06:00:00'),
('root@localhost', '2020-05-20', 'UPDATE', 'so', 'ip', 34, 'bitacora prueba', 1, 2, '2020-05-20 06:00:00'),
('root@localhost', '2020-05-20', 'DELETE', 'so', 'ip', 34, 'bitacora', 1, 2, '2020-05-21 05:22:55'),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 2, 'Quetzaltenango', 1, 4, '2020-03-28 05:26:20'),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 13, 'zona 24', 1, 1, '2020-03-30 02:10:06'),
('root@localhost', '2020-05-21', 'INSERT', 'so', 'ip', 24, 'San Juan Sacatepequez', 1, 1, '2020-05-21 21:22:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auditoria_queja`
--

CREATE TABLE `auditoria_queja` (
  `USUARIO` varchar(50) DEFAULT NULL,
  `FECHA` date DEFAULT NULL,
  `ACCION` varchar(20) DEFAULT NULL,
  `OS_USUARIO` varchar(20) DEFAULT NULL,
  `IP_USUARIO` varchar(15) DEFAULT NULL,
  `id_queja` int(11) NOT NULL,
  `medio_ingreso_queja` int(2) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `telefono` int(13) NOT NULL,
  `oficina` int(11) NOT NULL,
  `dpi_empleado` bigint(15) DEFAULT NULL,
  `detalle_queja` varchar(1000) NOT NULL,
  `archivo` longblob DEFAULT NULL,
  `estado_externo` int(2) NOT NULL,
  `estado_interno` int(2) NOT NULL,
  `fecha_ingreso` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tipo_queja` varchar(10) NOT NULL,
  `ingreso_queja` varchar(20) NOT NULL,
  `resultado` varchar(50) DEFAULT NULL,
  `justificacion` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `auditoria_queja`
--

INSERT INTO `auditoria_queja` (`USUARIO`, `FECHA`, `ACCION`, `OS_USUARIO`, `IP_USUARIO`, `id_queja`, `medio_ingreso_queja`, `nombre`, `correo`, `telefono`, `oficina`, `dpi_empleado`, `detalle_queja`, `archivo`, `estado_externo`, `estado_interno`, `fecha_ingreso`, `tipo_queja`, `ingreso_queja`, `resultado`, `justificacion`) VALUES
('root@localhost', '2020-05-20', 'INSERT', 'so', 'ip', 12, 2, 'RobertoMarin', 'hrobert.2897@gmail.com', 48959370, 8, NULL, 'NOSE', NULL, 1, 1, '2020-05-21 04:37:58', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-20', 'INSERT', 'so', 'ip', 12, 2, 'RobertoMarin', 'hrobert.2897@gmail.com', 48959370, 8, NULL, 'NOSE', NULL, 1, 1, '2020-05-21 04:37:58', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-20', 'DELETE', 'so', 'ip', 12, 2, 'Hugo Marin', 'hrobert.2897@gmail.com', 48959370, 8, NULL, 'NOSE', NULL, 1, 1, '2020-05-21 04:39:13', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 6, 4, 'Roberto Marin', 'hrobert@gmail.com', 45546690, 3, NULL, 'no se que agregar', NULL, 1, 1, '2020-05-09 12:13:24', 'QMS', 'Menú aplicación', 'Ingresada exitosamente su queja', NULL),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 6, 4, 'Roberto Marin', 'hrobert@gmail.com', 45546690, 3, NULL, 'no se que agregar', NULL, 1, 1, '2020-05-22 01:07:39', 'QMS', 'Menú aplicación', '${resultado}', NULL),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 6, 4, 'Roberto Marin', 'hrobert@gmail.com', 45546690, 3, NULL, 'no se que agregar', NULL, 2, 1, '2020-05-22 01:14:09', 'QMS', 'Menú aplicación', 'Hola', NULL),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 7, 3, 'Prueba', 'prueba@gmail.com', 45546691, 5, NULL, 'prueba', NULL, 1, 1, '2020-05-09 14:56:18', 'QMS', 'Menú aplicación', 'Ingresada exitosamente su queja', NULL),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 6, 4, 'Roberto Marin', 'hrobert@gmail.com', 45546690, 3, NULL, 'no se que agregar', NULL, 2, 1, '2020-05-22 01:16:35', 'QMS', 'Menú aplicación', 'Hola soy yo', NULL),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 6, 4, 'Roberto Marin', 'hrobert@gmail.com', 45546690, 3, NULL, 'no se que agregar', NULL, 1, 1, '2020-05-22 01:27:18', 'QMS', 'Menú aplicación', 'Hola soy yo', NULL),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 8, 4, 'Segunda Prueba', 'segundaprueba@gmail.com', 45554691, 12, NULL, 'queja desde el portal', NULL, 1, 1, '2020-05-09 14:57:11', 'QMS', 'Menú aplicación', 'Ingresada exitosamente su queja', NULL),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 8, 4, 'Segunda Prueba', 'segundaprueba@gmail.com', 45554691, 12, NULL, 'queja desde el portal', NULL, 3, 3, '2020-05-22 02:18:46', 'QMS', 'Menú aplicación', '', ''),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 8, 4, 'Segunda Prueba', 'segundaprueba@gmail.com', 45554691, 12, NULL, 'queja desde el portal', NULL, 1, 1, '2020-05-22 02:19:36', 'QMS', 'Menú aplicación', '', ''),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 9, 5, 'Hugo Marin', 'hugo@gmail.com', 45546691, 13, NULL, 'Prueba de portal o app', NULL, 1, 1, '2020-05-09 15:02:54', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 8, 4, 'Segunda Prueba', 'segundaprueba@gmail.com', 45554691, 12, NULL, 'queja desde el portal', NULL, 3, 3, '2020-05-22 02:19:51', 'QMS', 'Menú aplicación', '', ''),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 8, 4, 'Segunda Prueba', 'segundaprueba@gmail.com', 45554691, 12, NULL, 'queja desde el portal', NULL, 1, 1, '2020-05-22 02:22:48', 'QMS', 'Menú aplicación', '', ''),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 10, 4, 'usuario presencial', 'upresencial@gmail.com', 45546691, 5, NULL, 'Una descripcion a detalle de la aplicacion', NULL, 1, 1, '2020-05-09 15:04:11', 'QMS', 'Menú aplicación', 'Ingresada exitosamente su queja', NULL),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 8, 4, 'Segunda Prueba', 'segundaprueba@gmail.com', 45554691, 12, NULL, 'queja desde el portal', NULL, 3, 3, '2020-05-22 02:22:56', 'QMS', 'Menú aplicación', '', ''),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 8, 4, 'Segunda Prueba', 'segundaprueba@gmail.com', 45554691, 12, NULL, 'queja desde el portal', NULL, 1, 1, '2020-05-22 02:39:33', 'QMS', 'Menú aplicación', '', ''),
('root@localhost', '2020-05-21', 'INSERT', 'so', 'ip', 12, 2, 'Ana Julia ', 'ana@gmail.com', 45548559, 24, NULL, 'El servicio fue lento', NULL, 1, 1, '2020-05-22 04:10:54', 'QMS', 'Menú aplicación', 'Ingresada exitosamente su queja', NULL),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 12, 2, 'Ana Julia ', 'ana@gmail.com', 45548559, 24, NULL, 'El servicio fue lento', NULL, 1, 1, '2020-05-22 04:10:54', 'QMS', 'Menú aplicación', 'Ingresada exitosamente su queja', NULL),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 11, 1, 'Emily Elizabeth Dickinson ', 'raquel_mendez@gmail.com', 45546691, 5, NULL, 'Una descripcion a detalle de la aplicacion', NULL, 1, 1, '2020-05-21 00:20:18', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 6, 4, 'Roberto Marin', 'hrobert@gmail.com', 45546690, 3, NULL, 'no se que agregar', NULL, 2, 4, '2020-05-22 01:38:54', 'QMS', 'Menú aplicación', 'Trasladada al Administrador del punto de atención ', 'undefined'),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 6, 4, 'Roberto Marin', 'hrobert@gmail.com', 45546690, 3, NULL, 'no se que agregar', NULL, 1, 1, '2020-05-22 05:36:53', 'QMS', 'Menú aplicación', 'Trasladada al Administrador del punto de atención ', 'undefined'),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 6, 4, 'Roberto Marin', 'hrobert@gmail.com', 45546690, 3, NULL, 'no se que agregar', NULL, 3, 3, '2020-05-22 05:37:32', 'QMS', 'Menú aplicación', 'Queja no valida', 'Queja no valida'),
('root@localhost', '2020-05-21', 'UPDATE', 'so', 'ip', 6, 4, 'Roberto Marin', 'hrobert@gmail.com', 45546690, 3, NULL, 'no se que agregar', NULL, 1, 1, '2020-05-22 05:38:25', 'QMS', 'Menú aplicación', 'Queja no valida', 'Queja no valida'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 12, 2, 'Ana Julia ', 'ana@gmail.com', 45548559, 24, NULL, 'El servicio fue lento', NULL, 2, 4, '2020-05-22 04:11:29', 'QMS', 'Menú aplicación', 'Trasladada al Administrador del punto de atención ', 'null'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 12, 2, 'Ana Julia ', 'ana@gmail.com', 45548559, 24, NULL, 'El servicio fue lento', NULL, 2, 5, '2020-05-22 06:52:31', 'QMS', 'Menú aplicación', 'Trasladada al Administrador del punto de atención ', 'null'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 12, 2, 'Ana Julia ', 'ana@gmail.com', 45548559, 24, NULL, 'El servicio fue lento', NULL, 2, 8, '2020-05-22 06:52:46', 'QMS', 'Menú aplicación', 'Trasladada al Administrador del punto de atención ', 'null'),
('root@localhost', '2020-05-22', 'INSERT', 'so', 'ip', 13, 4, 'Julio Verne', 'julio@gmail.com', 45547885, 24, NULL, 'No han atendido a mis peticiones de banca en linea', NULL, 1, 1, '2020-05-22 07:19:28', 'QMS', 'Menú aplicación', 'Ingresada exitosamente su queja', NULL),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 12, 2, 'Ana Julia ', 'ana@gmail.com', 45548559, 24, NULL, 'El servicio fue lento', NULL, 2, 4, '2020-05-22 06:53:04', 'QMS', 'Menú aplicación', 'Trasladada al Administrador del punto de atención ', 'null'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 12, 2, 'Ana Julia ', 'ana@gmail.com', 45548559, 24, NULL, 'El servicio fue lento', NULL, 2, 5, '2020-05-22 08:36:26', 'QMS', 'Menú aplicación', 'Trasladada al Administrador del punto de atención ', 'null'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 12, 2, 'Ana Julia ', 'ana@gmail.com', 45548559, 24, NULL, 'El servicio fue lento', NULL, 2, 5, '2020-05-22 08:36:26', 'QMS', 'Menú aplicación', 'Trasladada al Administrador del punto de atención ', 'null'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 12, 2, 'Ana Julia ', 'ana@gmail.com', 45548559, 24, NULL, 'El servicio fue lento', NULL, 2, 5, '2020-05-22 08:36:26', 'QMS', 'Menú aplicación', 'Trasladada al Administrador del punto de atención ', 'null'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 12, 2, 'Ana Julia ', 'ana@gmail.com', 45548559, 24, NULL, 'El servicio fue lento', NULL, 2, 5, '2020-05-22 08:36:26', 'QMS', 'Menú aplicación', 'Trasladada al Administrador del punto de atención ', 'null'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 12, 2, 'Ana Julia ', 'ana@gmail.com', 45548559, 24, NULL, 'El servicio fue lento', NULL, 2, 6, '2020-05-22 08:55:46', 'QMS', 'Menú aplicación', 'Datos no concluyentes', 'Datos no concluyentes'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 12, 2, 'Ana Julia ', 'ana@gmail.com', 45548559, 24, NULL, 'El servicio fue lento', NULL, 2, 4, '2020-05-22 08:57:19', 'QMS', 'Menú aplicación', 'Datos no concluyentes', 'Datos no concluyentes'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 12, 2, 'Ana Julia ', 'ana@gmail.com', 45548559, 24, NULL, 'El servicio fue lento', NULL, 2, 5, '2020-05-22 09:04:44', 'QMS', 'Menú aplicación', 'Datos no concluyentes', 'Datos no concluyentes'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 11, 1, 'Emily Elizabeth Dickinson ', 'raquel_mendez@gmail.com', 45546691, 5, NULL, 'Una descripcion a detalle de la aplicacion', NULL, 3, 3, '2020-05-22 04:11:57', 'QMS', 'Portal', 'Argumento no valido', 'Argumento no valido'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 11, 1, 'Emily Elizabeth Dickinson ', 'raquel_mendez@gmail.com', 45546691, 24, NULL, 'Una descripcion a detalle de la aplicacion', NULL, 2, 4, '2020-05-22 14:42:56', 'QMS', 'Portal', 'Argumento no valido', 'Argumento no valido'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 11, 1, 'Emily Elizabeth Dickinson ', 'raquel_mendez@gmail.com', 45546691, 24, NULL, 'Una descripcion a detalle de la aplicacion', NULL, 2, 5, '2020-05-22 14:49:18', 'QMS', 'Portal', 'Argumento no valido', 'Argumento no valido'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 11, 1, 'Emily Elizabeth Dickinson ', 'raquel_mendez@gmail.com', 45546691, 24, NULL, 'Una descripcion a detalle de la aplicacion', NULL, 2, 7, '2020-05-22 14:50:14', 'QMS', 'Portal', '', 'Capacitacion de personal para el puesto de auxiliar'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 11, 1, 'Emily Elizabeth Dickinson ', 'raquel_mendez@gmail.com', 45546691, 24, NULL, 'Una descripcion a detalle de la aplicacion', NULL, 2, 4, '2020-05-22 14:52:06', 'QMS', 'Portal', '', 'Capacitacion de personal para el puesto de auxiliar'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 11, 1, 'Emily Elizabeth Dickinson ', 'raquel_mendez@gmail.com', 45546691, 24, NULL, 'Una descripcion a detalle de la aplicacion', NULL, 2, 5, '2020-05-22 14:52:18', 'QMS', 'Portal', '', 'Capacitacion de personal para el puesto de auxiliar'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 11, 1, 'Emily Elizabeth Dickinson ', 'raquel_mendez@gmail.com', 45546691, 24, NULL, 'Una descripcion a detalle de la aplicacion', NULL, 2, 7, '2020-05-22 14:52:51', 'QMS', 'Portal', 'Resolver el detalle de la queja para capacitar a p', 'Resolver el detalle de la queja para capacitar a personal de puestos operativos'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 11, 1, 'Emily Elizabeth Dickinson ', 'raquel_mendez@gmail.com', 45546691, 24, NULL, 'Una descripcion a detalle de la aplicacion', NULL, 2, 4, '2020-05-22 14:54:21', 'QMS', 'Portal', 'Resolver el detalle de la queja para capacitar a p', 'Resolver el detalle de la queja para capacitar a personal de puestos operativos'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 11, 1, 'Emily Elizabeth Dickinson ', 'raquel_mendez@gmail.com', 45546691, 24, NULL, 'Una descripcion a detalle de la aplicacion', NULL, 2, 5, '2020-05-22 14:54:35', 'QMS', 'Portal', 'Resolver el detalle de la queja para capacitar a p', 'Resolver el detalle de la queja para capacitar a personal de puestos operativos'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 9, 5, 'Hugo Marin', 'hugo@gmail.com', 45546691, 13, NULL, 'Prueba de portal o app', NULL, 3, 3, '2020-05-22 02:21:37', 'QMS', 'Portal', '', ''),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 9, 5, 'Hugo Marin', 'hugo@gmail.com', 45546691, 13, NULL, 'Prueba de portal o app', NULL, 2, 4, '2020-05-22 15:00:52', 'QMS', 'Portal', '', ''),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 7, 3, 'Prueba', 'prueba@gmail.com', 45546691, 5, NULL, 'prueba', NULL, 2, 4, '2020-05-22 01:26:15', 'QMS', 'Menú aplicación', 'Trasladada al Administrador del punto de atención ', NULL),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 12, 2, 'Ana Julia ', 'ana@gmail.com', 45548559, 24, NULL, 'El servicio fue lento', NULL, 2, 7, '2020-05-22 09:04:47', 'QMS', 'Menú aplicación', 'Datos no concluyentes', 'Datos no concluyentes'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 11, 1, 'Emily Elizabeth Dickinson ', 'raquel_mendez@gmail.com', 45546691, 24, NULL, 'Una descripcion a detalle de la aplicacion', NULL, 2, 7, '2020-05-22 14:54:57', 'QMS', 'Portal', 'Descripcion de la queja para mas informacion', 'Descripcion de la queja para mas informacion'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 9, 5, 'Hugo Marin', 'hugo@gmail.com', 45546691, 24, NULL, 'Prueba de portal o app', NULL, 2, 4, '2020-05-22 15:05:05', 'QMS', 'Portal', '', ''),
('root@localhost', '2020-05-22', 'INSERT', 'so', 'ip', 14, 4, 'Maria Gonzales', 'maria@gmail.com', 45548559, 24, NULL, 'El servicio para tramitar banca virtual fue muy lento', NULL, 1, 1, '2020-05-22 17:28:10', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 14, 4, 'Maria Gonzales', 'maria@gmail.com', 45548559, 24, NULL, 'El servicio para tramitar banca virtual fue muy lento', NULL, 1, 1, '2020-05-22 17:28:10', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 13, 4, 'Julio Verne', 'julio@gmail.com', 45547885, 24, NULL, 'No han atendido a mis peticiones de banca en linea', NULL, 1, 1, '2020-05-22 07:19:28', 'QMS', 'Menú aplicación', 'Ingresada exitosamente su queja', NULL),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 9, 5, 'Hugo Marin', 'hugo@gmail.com', 45546691, 24, NULL, 'Prueba de portal o app', NULL, 2, 5, '2020-05-22 17:11:17', 'QMS', 'Portal', '', ''),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 14, 4, 'Maria Gonzales', 'maria@gmail.com', 45548559, 24, NULL, 'El servicio para tramitar banca virtual fue muy lento', NULL, 2, 4, '2020-05-22 17:28:56', 'QMS', 'Portal', 'Trasladada al Administrador del punto de atención ', 'null'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 14, 4, 'Maria Gonzales', 'maria@gmail.com', 45548559, 24, NULL, 'El servicio para tramitar banca virtual fue muy lento', NULL, 2, 5, '2020-05-22 17:30:56', 'QMS', 'Portal', 'Trasladada al Administrador del punto de atención ', 'null'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 9, 5, 'Hugo Marin', 'hugo@gmail.com', 45546691, 24, NULL, 'Prueba de portal o app', NULL, 2, 6, '2020-05-22 17:30:41', 'QMS', 'Portal', 'Solo prueba para el sistema', 'Solo prueba para el sistema'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 14, 4, 'Maria Gonzales', 'maria@gmail.com', 45548559, 24, NULL, 'El servicio para tramitar banca virtual fue muy lento', NULL, 2, 7, '2020-05-22 17:31:22', 'QMS', 'Portal', 'Capacitar personal nuevo en el punto de atencion', 'Capacitar personal nuevo en el punto de atencion'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 14, 4, 'Maria Gonzales', 'maria@gmail.com', 45548559, 24, NULL, 'El servicio para tramitar banca virtual fue muy lento', NULL, 2, 8, '2020-05-22 17:32:59', 'QMS', 'Portal', 'Solucion no apta para el problema', 'Solucion no apta para el problema'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 14, 4, 'Maria Gonzales', 'maria@gmail.com', 45548559, 24, NULL, 'El servicio para tramitar banca virtual fue muy lento', NULL, 2, 5, '2020-05-22 17:33:25', 'QMS', 'Portal', 'Solucion no apta para el problema', 'Solucion no apta para el problema'),
('root@localhost', '2020-05-22', 'UPDATE', 'so', 'ip', 14, 4, 'Maria Gonzales', 'maria@gmail.com', 45548559, 24, NULL, 'El servicio para tramitar banca virtual fue muy lento', NULL, 2, 7, '2020-05-22 17:33:41', 'QMS', 'Portal', 'Solventar problema en usuario para banca', 'Solventar problema en usuario para banca'),
('root@localhost', '2020-05-23', 'INSERT', 'so', 'ip', 15, 4, 'C3P0', 'c3p0@gmail.com', 45548556, 24, NULL, 'Servicio lento y no responden en el pbx', NULL, 1, 1, '2020-05-23 06:48:35', 'QMS', 'Menú aplicación', 'Ingresada exitosamente su queja', NULL),
('root@localhost', '2020-05-23', 'UPDATE', 'so', 'ip', 15, 4, 'C3P0', 'c3p0@gmail.com', 45548556, 24, NULL, 'Servicio lento y no responden en el pbx', NULL, 1, 1, '2020-05-23 06:48:35', 'QMS', 'Menú aplicación', 'Ingresada exitosamente su queja', NULL),
('root@localhost', '2020-05-23', 'UPDATE', 'so', 'ip', 11, 1, 'Emily Elizabeth Dickinson ', 'raquel_mendez@gmail.com', 45546691, 24, NULL, 'Una descripcion a detalle de la aplicacion', NULL, 2, 4, '2020-05-22 16:00:35', 'QMS', 'Portal', 'Trasladada al Administrador del punto de atención ', 'null'),
('root@localhost', '2020-05-23', 'UPDATE', 'so', 'ip', 11, 1, 'Emily Elizabeth Dickinson ', 'raquel_mendez@gmail.com', 45546691, 24, NULL, 'Una descripcion a detalle de la aplicacion', NULL, 2, 5, '2020-05-23 06:49:58', 'QMS', 'Portal', 'Trasladada al Administrador del punto de atención ', 'null'),
('root@localhost', '2020-05-23', 'INSERT', 'so', 'ip', 16, 3, 'Quijote de la Mancha', 'quijote@gmail.com', 45544847, 12, NULL, 'Problema con el servicio ', NULL, 1, 1, '2020-05-23 12:39:50', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-23', 'INSERT', 'so', 'ip', 17, 1, 'Aslan', 'aslan@gmail.com', 45587126, 5, NULL, 'Queja para prueba', NULL, 1, 1, '2020-05-23 12:49:32', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-23', 'INSERT', 'so', 'ip', 18, 5, 'Harry Potter', 'harry@gmail.com', 85595662, 23, NULL, 'Detalle de queja ', NULL, 1, 1, '2020-05-23 12:56:53', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-23', 'INSERT', 'so', 'ip', 19, 4, 'Frodo', 'frodo@gmail.com', 74455522, 7, NULL, 'Prueba de queja', NULL, 1, 1, '2020-05-23 12:58:25', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-23', 'INSERT', 'so', 'ip', 20, 2, 'Annorax', 'an@gmail.com', 47778855, 7, NULL, 'detalle de la queja prueba', NULL, 1, 1, '2020-05-23 13:04:13', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-23', 'INSERT', 'so', 'ip', 21, 1, 'Ciro', 'ciro@gmail.com', 47445585, 8, NULL, 'Detalle de una queja', NULL, 1, 1, '2020-05-23 13:05:14', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-23', 'INSERT', 'so', 'ip', 22, 2, 'participante', 'participantes@gmail.com', 74448855, 7, NULL, 'Prueba de la queja', NULL, 1, 1, '2020-05-23 13:08:20', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-23', 'INSERT', 'so', 'ip', 23, 2, 'Emili Salguero ', 'raquel_mendez@gmail.com', 45546691, 23, NULL, 'Preuba de la queja para envio de correo', NULL, 1, 1, '2020-05-23 13:46:29', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-23', 'INSERT', 'so', 'ip', 24, 3, 'prueba correo', 'corre@gmail.com', 48588556, 7, NULL, 'Detalles de la prueba', NULL, 1, 1, '2020-05-23 13:53:03', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-23', 'UPDATE', 'so', 'ip', 16, 3, 'Quijote de la Mancha', 'quijote@gmail.com', 45544847, 12, NULL, 'Problema con el servicio ', NULL, 1, 1, '2020-05-23 12:39:50', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-23', 'UPDATE', 'so', 'ip', 24, 3, 'prueba correo', 'corre@gmail.com', 48588556, 7, NULL, 'Detalles de la prueba', NULL, 1, 1, '2020-05-23 13:53:03', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-23', 'UPDATE', 'so', 'ip', 23, 2, 'Emili Salguero ', 'raquel_mendez@gmail.com', 45546691, 23, NULL, 'Preuba de la queja para envio de correo', NULL, 1, 1, '2020-05-23 13:46:29', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-23', 'UPDATE', 'so', 'ip', 21, 1, 'Ciro', 'ciro@gmail.com', 47445585, 8, NULL, 'Detalle de una queja', NULL, 1, 1, '2020-05-23 13:05:14', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-23', 'UPDATE', 'so', 'ip', 20, 2, 'Annorax', 'an@gmail.com', 47778855, 7, NULL, 'detalle de la queja prueba', NULL, 1, 1, '2020-05-23 13:04:13', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-23', 'UPDATE', 'so', 'ip', 19, 4, 'Frodo', 'frodo@gmail.com', 74455522, 7, NULL, 'Prueba de queja', NULL, 1, 1, '2020-05-23 12:58:25', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-23', 'UPDATE', 'so', 'ip', 22, 2, 'participante', 'participantes@gmail.com', 74448855, 7, NULL, 'Prueba de la queja', NULL, 1, 1, '2020-05-23 13:08:20', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-23', 'UPDATE', 'so', 'ip', 18, 5, 'Harry Potter', 'harry@gmail.com', 85595662, 23, NULL, 'Detalle de queja ', NULL, 1, 1, '2020-05-23 12:56:53', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-23', 'UPDATE', 'so', 'ip', 17, 1, 'Aslan', 'aslan@gmail.com', 45587126, 5, NULL, 'Queja para prueba', NULL, 1, 1, '2020-05-23 12:49:32', 'QMS', 'Portal', 'Ingresada exitosamente a través de la aplicación m', NULL),
('root@localhost', '2020-05-23', 'UPDATE', 'so', 'ip', 11, 1, 'Emily Elizabeth Dickinson ', 'raquel_mendez@gmail.com', 45546691, 24, NULL, 'Una descripcion a detalle de la aplicacion', NULL, 2, 7, '2020-05-23 06:50:23', 'QMS', 'Portal', 'Agregar cambios en detalle', 'Agregar cambios en detalle');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auditoria_tiposqueja`
--

CREATE TABLE `auditoria_tiposqueja` (
  `USUARIO` varchar(50) DEFAULT NULL,
  `FECHA` date DEFAULT NULL,
  `ACCION` varchar(20) DEFAULT NULL,
  `OS_USUARIO` varchar(20) DEFAULT NULL,
  `IP_USUARIO` varchar(15) DEFAULT NULL,
  `siglas` varchar(10) NOT NULL,
  `descripcion_tq` varchar(100) NOT NULL,
  `estado_tq` int(2) NOT NULL,
  `fecha_queja` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `auditoria_tiposqueja`
--

INSERT INTO `auditoria_tiposqueja` (`USUARIO`, `FECHA`, `ACCION`, `OS_USUARIO`, `IP_USUARIO`, `siglas`, `descripcion_tq`, `estado_tq`, `fecha_queja`) VALUES
('root@localhost', '2020-05-20', 'INSERT', 'so', 'ip', 'QP', 'queja prueba', 1, '2020-05-20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auditoria_usuarios`
--

CREATE TABLE `auditoria_usuarios` (
  `USUARIO` varchar(50) DEFAULT NULL,
  `FECHA` date DEFAULT NULL,
  `ACCION` varchar(20) DEFAULT NULL,
  `OS_USUARIO` varchar(20) DEFAULT NULL,
  `IP_USUARIO` varchar(15) DEFAULT NULL,
  `dpi` bigint(15) NOT NULL,
  `nombre_usuario` varchar(50) NOT NULL,
  `correo_usuario` varchar(50) NOT NULL,
  `estado_usuario` int(2) NOT NULL,
  `region` int(10) NOT NULL,
  `id_puntosdeatencion` int(11) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `cargo_usuario` varchar(25) NOT NULL,
  `password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `auditoria_usuarios`
--

INSERT INTO `auditoria_usuarios` (`USUARIO`, `FECHA`, `ACCION`, `OS_USUARIO`, `IP_USUARIO`, `dpi`, `nombre_usuario`, `correo_usuario`, `estado_usuario`, `region`, `id_puntosdeatencion`, `fecha_creacion`, `cargo_usuario`, `password`) VALUES
('root@localhost', '2020-05-20', 'INSERT', 'so', 'ip', 32323, 'BITACORA Roberto Marin', 'hrobert.28972@gmail.com', 0, 1, 23, '2020-05-20 06:00:00', 'Administrador', 'hola123'),
('root@localhost', '2020-05-20', 'DELETE', 'so', 'ip', 32323, 'BITACORA Roberto', 'hrobert.28972@gmail.com', 0, 1, 23, '2020-05-21 02:50:29', 'Administrador', 'hola123'),
('root@localhost', '2020-05-20', 'INSERT', 'so', 'ip', 32323, 'BITACORA Roberto Marin', 'hrobert.28972@gmail.com', 0, 1, 3, '2020-05-20 06:00:00', 'Administrador', 'hola123'),
('root@localhost', '2020-05-20', 'UPDATE', 'so', 'ip', 32323, 'BITACORA Roberto Marin', 'hrobert.28972@gmail.com', 0, 1, 3, '2020-05-20 06:00:00', 'Administrador', 'hola123'),
('root@localhost', '2020-05-21', 'INSERT', 'so', 'ip', 1234569685744, 'Operador Quejas', 'operador@gmail.com', 0, 1, 24, '2020-05-22 03:19:24', 'Jefe Inmediato', 'hola'),
('root@localhost', '2020-05-22', 'INSERT', 'so', 'ip', 7485965985623, 'consulta usuario', 'consulta@gmail.com', 0, 1, 24, '2020-05-22 18:17:25', 'Titular', 'hola');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `auditoria_usuarios_rol`
--

CREATE TABLE `auditoria_usuarios_rol` (
  `USUARIO` varchar(50) DEFAULT NULL,
  `FECHA` date DEFAULT NULL,
  `ACCION` varchar(20) DEFAULT NULL,
  `OS_USUARIO` varchar(20) DEFAULT NULL,
  `IP_USUARIO` varchar(15) DEFAULT NULL,
  `id_userol` int(11) NOT NULL,
  `id_rol` int(20) NOT NULL,
  `dpi` bigint(15) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `auditoria_usuarios_rol`
--

INSERT INTO `auditoria_usuarios_rol` (`USUARIO`, `FECHA`, `ACCION`, `OS_USUARIO`, `IP_USUARIO`, `id_userol`, `id_rol`, `dpi`, `fecha_creacion`) VALUES
('root@localhost', '2020-05-20', 'INSERT', 'so', 'ip', 23, 1, 32323, '2020-05-20 06:00:00'),
('root@localhost', '2020-05-20', 'UPDATE', 'so', 'ip', 23, 1, 32323, '2020-05-20 06:00:00'),
('root@localhost', '2020-05-20', 'DELETE', 'so', 'ip', 23, 3, 32323, '2020-05-21 05:34:13'),
('root@localhost', '2020-05-21', 'INSERT', 'so', 'ip', 4, 4, 1234569685744, '2020-05-22 03:23:52'),
('root@localhost', '2020-05-22', 'INSERT', 'so', 'ip', 5, 5, 7485965985623, '2020-05-22 18:18:25');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados_externos`
--

CREATE TABLE `estados_externos` (
  `id_estado_externo` int(11) NOT NULL,
  `estado` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `estados_externos`
--

INSERT INTO `estados_externos` (`id_estado_externo`, `estado`) VALUES
(1, 'Presentada'),
(2, 'Análisis'),
(3, 'Finalizada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados_internos`
--

CREATE TABLE `estados_internos` (
  `id_estado_interno` int(11) NOT NULL,
  `estado_i` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `estados_internos`
--

INSERT INTO `estados_internos` (`id_estado_interno`, `estado_i`) VALUES
(1, 'Presentada'),
(2, 'Análisis'),
(3, 'No aplica'),
(4, 'En análisis'),
(5, 'Procedente'),
(6, 'No procedente'),
(7, 'Seguimiento'),
(8, 'Reanálisis'),
(9, 'Finalizada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `medios_ingreso_queja`
--

CREATE TABLE `medios_ingreso_queja` (
  `id_medio_ingreso_queja` int(11) NOT NULL,
  `descripcion_medio` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `medios_ingreso_queja`
--

INSERT INTO `medios_ingreso_queja` (`id_medio_ingreso_queja`, `descripcion_medio`) VALUES
(1, 'Teléfono'),
(2, 'Correo'),
(3, 'Chat'),
(4, 'Presencial'),
(5, 'App móvil');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puntosdeatencion`
--

CREATE TABLE `puntosdeatencion` (
  `id` int(11) NOT NULL,
  `nombre_puntodeatencion` varchar(50) NOT NULL,
  `estado_puntodeatencion` int(2) NOT NULL,
  `region_puntodeatencion` int(10) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `puntosdeatencion`
--

INSERT INTO `puntosdeatencion` (`id`, `nombre_puntodeatencion`, `estado_puntodeatencion`, `region_puntodeatencion`, `fecha_creacion`) VALUES
(2, 'Quetzaltenango', 0, 4, '2020-05-21 21:21:33'),
(3, 'Cuilapa', 1, 3, '2020-03-28 05:26:20'),
(5, 'Zona 14', 1, 1, '2020-03-30 00:26:40'),
(7, 'Santa Rosa', 1, 3, '2020-03-30 00:27:04'),
(8, 'Santa Cruz', 1, 4, '2020-03-28 05:26:20'),
(12, 'Livingstone', 1, 2, '2020-03-28 05:26:20'),
(13, 'zona 24', 0, 1, '2020-05-21 21:22:08'),
(23, 'ejemplo', 0, 1, '2020-03-30 02:14:34'),
(24, 'San Juan Sacatepequez', 1, 1, '2020-05-21 21:22:40');

--
-- Disparadores `puntosdeatencion`
--
DELIMITER $$
CREATE TRIGGER `AUDITORIA_DELETE_PUNTOSDEATENCION` AFTER DELETE ON `puntosdeatencion` FOR EACH ROW BEGIN
INSERT INTO auditoria_puntosdeatencion (usuario, fecha, accion, os_usuario, ip_usuario,id, nombre_puntodeatencion, estado_puntodeatencion, region_puntodeatencion, fecha_creacion) VALUES (CURRENT_USER, now(), 'DELETE','so', 'ip',OLD.id, OLD.nombre_puntodeatencion, OLD.estado_puntodeatencion, OLD.region_puntodeatencion, OLD.fecha_creacion);
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `AUDITORIA_INSERT_PUNTOSDEATENCION` AFTER INSERT ON `puntosdeatencion` FOR EACH ROW BEGIN
INSERT INTO auditoria_puntosdeatencion (usuario, fecha, accion, os_usuario, ip_usuario,id, nombre_puntodeatencion, estado_puntodeatencion, region_puntodeatencion, fecha_creacion) VALUES (CURRENT_USER, now(), 'INSERT','so', 'ip',NEW.id, NEW.nombre_puntodeatencion, NEW.estado_puntodeatencion, NEW.region_puntodeatencion, NEW.fecha_creacion);
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `AUDITORIA_UPDATE_PUNTOSDEATENCION` AFTER UPDATE ON `puntosdeatencion` FOR EACH ROW BEGIN
INSERT INTO auditoria_puntosdeatencion (usuario, fecha, accion, os_usuario, ip_usuario,id, nombre_puntodeatencion, estado_puntodeatencion, region_puntodeatencion, fecha_creacion) VALUES (CURRENT_USER, now(), 'UPDATE','so', 'ip',OLD.id, OLD.nombre_puntodeatencion, OLD.estado_puntodeatencion, OLD.region_puntodeatencion, OLD.fecha_creacion);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `queja`
--

CREATE TABLE `queja` (
  `id_queja` int(11) NOT NULL,
  `medio_ingreso_queja` int(2) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `correo` varchar(50) NOT NULL,
  `telefono` int(13) NOT NULL,
  `oficina` int(11) NOT NULL,
  `dpi_empleado` bigint(15) DEFAULT NULL,
  `detalle_queja` varchar(1000) NOT NULL,
  `archivo` longblob DEFAULT NULL,
  `estado_externo` int(2) NOT NULL,
  `estado_interno` int(2) NOT NULL,
  `fecha_ingreso` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `tipo_queja` varchar(10) NOT NULL,
  `ingreso_queja` varchar(20) NOT NULL,
  `resultado` varchar(50) DEFAULT NULL,
  `justificacion` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `queja`
--

INSERT INTO `queja` (`id_queja`, `medio_ingreso_queja`, `nombre`, `correo`, `telefono`, `oficina`, `dpi_empleado`, `detalle_queja`, `archivo`, `estado_externo`, `estado_interno`, `fecha_ingreso`, `tipo_queja`, `ingreso_queja`, `resultado`, `justificacion`) VALUES
(6, 4, 'Roberto Marin', 'hrobert@gmail.com', 45546690, 3, NULL, 'no se que agregar', NULL, 2, 4, '2020-05-22 05:38:36', 'QMS', 'Menú aplicación', 'Trasladada al Administrador del punto de atención ', 'null'),
(7, 3, 'Prueba', 'prueba@gmail.com', 45546691, 5, NULL, 'prueba', NULL, 3, 9, '2020-05-22 15:28:46', 'QMS', 'Menú aplicación', 'Queja no completa', 'null'),
(8, 4, 'Segunda Prueba', 'segundaprueba@gmail.com', 45554691, 12, NULL, 'queja desde el portal', NULL, 3, 3, '2020-05-22 02:39:53', 'QMS', 'Menú aplicación', 'Queja no explicada', 'Queja no explicada'),
(9, 5, 'Hugo Marin', 'hugo@gmail.com', 45546691, 24, NULL, 'Prueba de portal o app', NULL, 3, 9, '2020-05-22 17:32:33', 'QMS', 'Portal', 'Atendida', 'Solo prueba para el sistema'),
(10, 4, 'usuario presencial', 'upresencial@gmail.com', 45546691, 5, NULL, 'Una descripcion a detalle de la aplicacion', NULL, 3, 3, '2020-05-22 02:23:37', 'QMS', 'Menú aplicación', '', ''),
(11, 1, 'Emily Elizabeth Dickinson ', 'raquel_mendez@gmail.com', 45546691, 24, NULL, 'Una descripcion a detalle de la aplicacion', NULL, 3, 9, '2020-05-23 15:28:09', 'QMS', 'Portal', 'Justificacion acepta', 'Agregar cambios en detalle'),
(12, 2, 'Ana Julia ', 'ana@gmail.com', 45548559, 24, NULL, 'El servicio fue lento', NULL, 2, 8, '2020-05-22 15:39:19', 'QMS', 'Menú aplicación', 'Se estableció lo lento del servicio, verificar usu', 'Se estableció lo lento del servicio, verificar usuario y puesto'),
(13, 4, 'Julio Verne', 'julio@gmail.com', 45547885, 24, NULL, 'No han atendido a mis peticiones de banca en linea', NULL, 3, 3, '2020-05-22 17:29:29', 'QMS', 'Menú aplicación', 'Queja no apta para mal servicio', 'Queja no apta para mal servicio'),
(14, 4, 'Maria Gonzales', 'maria@gmail.com', 45548559, 24, NULL, 'El servicio para tramitar banca virtual fue muy lento', NULL, 2, 4, '2020-05-22 17:34:14', 'QMS', 'Portal', 'Trasladada al Administrador del punto de atención ', 'null'),
(15, 4, 'C3P0', 'c3p0@gmail.com', 45548556, 24, NULL, 'Servicio lento y no responden en el pbx', NULL, 2, 4, '2020-05-23 06:49:14', 'QMS', 'Menú aplicación', 'Trasladada al Administrador del punto de atención ', 'null'),
(16, 3, 'Quijote de la Mancha', 'quijote@gmail.com', 45544847, 12, NULL, 'Problema con el servicio ', NULL, 2, 4, '2020-05-23 14:35:20', 'QMS', 'Portal', 'Trasladada al Administrador del punto de atención ', 'null'),
(17, 1, 'Aslan', 'aslan@gmail.com', 45587126, 5, NULL, 'Queja para prueba', NULL, 3, 3, '2020-05-23 15:27:48', 'QMS', 'Portal', 'no apta', 'no apta'),
(18, 5, 'Harry Potter', 'harry@gmail.com', 85595662, 23, NULL, 'Detalle de queja ', NULL, 3, 3, '2020-05-23 15:27:32', 'QMS', 'Portal', 'no apta', 'no apta'),
(19, 4, 'Frodo', 'frodo@gmail.com', 74455522, 7, NULL, 'Prueba de queja', NULL, 3, 3, '2020-05-23 15:27:21', 'QMS', 'Portal', 'No apta', 'No apta'),
(20, 2, 'Annorax', 'an@gmail.com', 47778855, 7, NULL, 'detalle de la queja prueba', NULL, 3, 3, '2020-05-23 15:27:15', 'QMS', 'Portal', 'No apta', 'No apta'),
(21, 1, 'Ciro', 'ciro@gmail.com', 47445585, 8, NULL, 'Detalle de una queja', NULL, 3, 3, '2020-05-23 15:27:11', 'QMS', 'Portal', 'No apta', 'No apta'),
(22, 2, 'participante', 'participantes@gmail.com', 74448855, 7, NULL, 'Prueba de la queja', NULL, 3, 3, '2020-05-23 15:27:27', 'QMS', 'Portal', 'No apta', 'No apta'),
(23, 2, 'Emili Salguero ', 'raquel_mendez@gmail.com', 45546691, 23, NULL, 'Preuba de la queja para envio de correo', NULL, 3, 3, '2020-05-23 15:27:06', 'QMS', 'Portal', 'No apta', 'No apta'),
(24, 3, 'prueba correo', 'corre@gmail.com', 48588556, 7, NULL, 'Detalles de la prueba', NULL, 3, 3, '2020-05-23 15:26:59', 'QMS', 'Portal', 'No apta', 'No apta');

--
-- Disparadores `queja`
--
DELIMITER $$
CREATE TRIGGER `AUDITORIA_DELETE_QUEJA` AFTER DELETE ON `queja` FOR EACH ROW BEGIN
INSERT INTO auditoria_queja (usuario, fecha, accion, os_usuario, ip_usuario,id_queja, medio_ingreso_queja, nombre, correo, telefono, oficina, dpi_empleado, detalle_queja, archivo, estado_externo, estado_interno, fecha_ingreso, tipo_queja, ingreso_queja, resultado, justificacion) VALUES (CURRENT_USER, now(), 'DELETE','so', 'ip', OLD.id_queja, OLD.medio_ingreso_queja, OLD.nombre, OLD.correo, OLD.telefono, OLD.oficina, OLD.dpi_empleado, OLD.detalle_queja,OLD.archivo, OLD.estado_externo, OLD.estado_interno, OLD.fecha_ingreso, OLD.tipo_queja, OLD.ingreso_queja, OLD.resultado, OLD.justificacion);
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `AUDITORIA_INSERT_QUEJA` AFTER INSERT ON `queja` FOR EACH ROW BEGIN
INSERT INTO auditoria_queja (usuario, fecha, accion, os_usuario, ip_usuario,id_queja, medio_ingreso_queja, nombre, correo, telefono, oficina, dpi_empleado, detalle_queja, archivo, estado_externo, estado_interno, fecha_ingreso, tipo_queja, ingreso_queja, resultado, justificacion) VALUES (CURRENT_USER, now(), 'INSERT','so', 'ip', NEW.id_queja, NEW.medio_ingreso_queja, NEW.nombre, NEW.correo, NEW.telefono, NEW.oficina, NEW.dpi_empleado, NEW.detalle_queja,NEW.archivo, NEW.estado_externo, NEW.estado_interno, NEW.fecha_ingreso, NEW.tipo_queja, NEW.ingreso_queja, NEW.resultado, NEW.justificacion);
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `AUDITORIA_UPDATE_QUEJA` AFTER UPDATE ON `queja` FOR EACH ROW BEGIN
INSERT INTO auditoria_queja (usuario, fecha, accion, os_usuario, ip_usuario,id_queja, medio_ingreso_queja, nombre, correo, telefono, oficina, dpi_empleado, detalle_queja, archivo, estado_externo, estado_interno, fecha_ingreso, tipo_queja, ingreso_queja, resultado, justificacion) VALUES (CURRENT_USER, now(), 'UPDATE','so', 'ip', OLD.id_queja, OLD.medio_ingreso_queja, OLD.nombre, OLD.correo, OLD.telefono, OLD.oficina, OLD.dpi_empleado, OLD.detalle_queja,OLD.archivo, OLD.estado_externo, OLD.estado_interno, OLD.fecha_ingreso, OLD.tipo_queja, OLD.ingreso_queja, OLD.resultado, OLD.justificacion);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `regiones`
--

CREATE TABLE `regiones` (
  `id_region` int(11) NOT NULL,
  `nombre_region` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `regiones`
--

INSERT INTO `regiones` (`id_region`, `nombre_region`) VALUES
(1, 'Central'),
(2, 'Nororiente'),
(3, 'Sur'),
(4, 'Occidente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id_rol` int(11) NOT NULL,
  `tipo_rol` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id_rol`, `tipo_rol`) VALUES
(1, 'Administrador'),
(2, 'Receptor'),
(3, 'Centralizador'),
(4, 'Operador'),
(5, 'Consulta');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiposqueja`
--

CREATE TABLE `tiposqueja` (
  `siglas` varchar(10) NOT NULL,
  `descripcion_tq` varchar(100) NOT NULL,
  `estado_tq` int(2) NOT NULL,
  `fecha_queja` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tiposqueja`
--

INSERT INTO `tiposqueja` (`siglas`, `descripcion_tq`, `estado_tq`, `fecha_queja`) VALUES
('QMS', 'Queja por Mal Servicio', 1, '2020-04-13'),
('QMSC', 'Queja por Mal Servicio en Creditos', 1, '2020-04-13');

--
-- Disparadores `tiposqueja`
--
DELIMITER $$
CREATE TRIGGER `AUDITORIA_DELETE_TIPOSQUEJA` AFTER UPDATE ON `tiposqueja` FOR EACH ROW BEGIN
INSERT INTO auditoria_tiposqueja (usuario, fecha, accion, os_usuario, ip_usuario, siglas, descripcion_tq, estado_tq, fecha_queja) VALUES (CURRENT_USER, now(), 'UPDATE','so', 'ip',OLD.siglas, OLD.descripcion_tq, OLD.estado_tq, OLD.fecha_queja);
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `AUDITORIA_INSERT_TIPOSQUEJA` AFTER INSERT ON `tiposqueja` FOR EACH ROW BEGIN
INSERT INTO auditoria_tiposqueja (usuario, fecha, accion, os_usuario, ip_usuario, siglas, descripcion_tq, estado_tq, fecha_queja) VALUES (CURRENT_USER, now(), 'INSERT','so', 'ip',NEW.siglas, NEW.descripcion_tq, NEW.estado_tq, NEW.fecha_queja);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `dpi` bigint(15) NOT NULL,
  `nombre_usuario` varchar(50) NOT NULL,
  `correo_usuario` varchar(50) NOT NULL,
  `estado_usuario` int(2) NOT NULL,
  `region` int(10) NOT NULL,
  `id_puntosdeatencion` int(11) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `cargo_usuario` varchar(25) NOT NULL,
  `password` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`dpi`, `nombre_usuario`, `correo_usuario`, `estado_usuario`, `region`, `id_puntosdeatencion`, `fecha_creacion`, `cargo_usuario`, `password`) VALUES
(145263698547, 'Tercer Usuario prueba', 'pruebatercero@gmail.com', 1, 1, 5, '2020-05-21 04:59:32', 'Suplente', 'hola'),
(147852369585, 'Segundo Usuario Prueba', 'segundo@gmail.com', 1, 3, 3, '2020-03-29 04:52:21', 'Suplente', 'hola'),
(1234569685744, 'Operador Quejas', 'operador@gmail.com', 1, 1, 24, '2020-05-22 03:19:24', 'Jefe Inmediato', 'hola'),
(1236547895215, 'Primer Usuario Prueba', 'pruebaprimero@gmail.com', 1, 3, 7, '2020-03-30 00:26:28', 'Titular', 'hola'),
(2792301760101, 'Emili Raquel Mendez Salguero', 'raquel_mendez@live.com', 1, 1, 5, '2020-05-09 12:21:26', 'Titular', 'hola'),
(7485965985623, 'consulta usuario', 'consulta@gmail.com', 1, 1, 24, '2020-05-22 18:17:25', 'Titular', 'hola');

--
-- Disparadores `usuarios`
--
DELIMITER $$
CREATE TRIGGER `AUDITORIA_DELETE_USUARIO` AFTER DELETE ON `usuarios` FOR EACH ROW BEGIN
INSERT INTO auditoria_usuarios (usuario, fecha, accion, os_usuario, ip_usuario, dpi,nombre_usuario, correo_usuario, region, id_puntosdeatencion, fecha_creacion, cargo_usuario, password) VALUES ( CURRENT_USER, now(), 'DELETE','so', 'ip',OLD.dpi, OLD.nombre_usuario,  OLD.correo_usuario, OLD.region, OLD.id_puntosdeatencion, OLD.fecha_creacion, OLD.cargo_usuario, OLD.password);
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `AUDITORIA_INSERT_USUARIOS` AFTER INSERT ON `usuarios` FOR EACH ROW BEGIN
INSERT INTO auditoria_usuarios (usuario, fecha, accion, os_usuario, ip_usuario, dpi,nombre_usuario, correo_usuario, region, id_puntosdeatencion, fecha_creacion, cargo_usuario, password) VALUES ( CURRENT_USER, now(), 'INSERT','so', 'ip',NEw.dpi, NEW.nombre_usuario,  NEW.correo_usuario, NEW.region, NEW.id_puntosdeatencion, NEW.fecha_creacion, NEW.cargo_usuario, NEW.password);
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `AUDITORIA_UPDATE_USUARIOS` AFTER UPDATE ON `usuarios` FOR EACH ROW BEGIN
INSERT INTO auditoria_usuarios (usuario, fecha, accion, os_usuario, ip_usuario, dpi,nombre_usuario, correo_usuario, region, id_puntosdeatencion, fecha_creacion, cargo_usuario, password) VALUES ( CURRENT_USER, now(), 'UPDATE','so', 'ip',OLD.dpi, OLD.nombre_usuario,  OLD.correo_usuario, OLD.region, OLD.id_puntosdeatencion, OLD.fecha_creacion, OLD.cargo_usuario, OLD.password);
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_rol`
--

CREATE TABLE `usuario_rol` (
  `id_userol` int(11) NOT NULL,
  `id_rol` int(20) NOT NULL,
  `dpi` bigint(15) NOT NULL,
  `fecha_creacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario_rol`
--

INSERT INTO `usuario_rol` (`id_userol`, `id_rol`, `dpi`, `fecha_creacion`) VALUES
(1, 1, 147852369585, '2020-03-30 01:55:23'),
(2, 2, 2792301760101, '2020-05-09 12:22:49'),
(3, 3, 145263698547, '2020-05-21 05:04:17'),
(4, 4, 1234569685744, '2020-05-22 03:23:52'),
(5, 5, 7485965985623, '2020-05-22 18:18:25');

--
-- Disparadores `usuario_rol`
--
DELIMITER $$
CREATE TRIGGER `AUDITORIA_DELETE_USUARIO_ROL` AFTER DELETE ON `usuario_rol` FOR EACH ROW BEGIN
INSERT INTO auditoria_usuarios_rol (usuario, fecha, accion, os_usuario, ip_usuario, id_userol, id_rol, dpi, fecha_creacion) VALUES (CURRENT_USER, now(), 'DELETE','so', 'ip', OLD.id_userol, OLD.id_rol,OLD.dpi, OLD.fecha_creacion);
END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `AUDITORIA_INSERT_USUARIO_ROL` AFTER INSERT ON `usuario_rol` FOR EACH ROW BEGIN
INSERT INTO auditoria_usuarios_rol (usuario, fecha, accion, os_usuario, ip_usuario, id_userol, id_rol, dpi, fecha_creacion) VALUES (CURRENT_USER, now(), 'INSERT','so', 'ip', NEW.id_userol, NEW.id_rol,NEW.dpi, NEW.fecha_creacion);
END
$$
DELIMITER ;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asignar_queja_punto`
--
ALTER TABLE `asignar_queja_punto`
  ADD PRIMARY KEY (`id_asignacion_queja_punto`),
  ADD KEY `id_queja` (`id_queja`),
  ADD KEY `id_puntosdeatencion` (`id_puntosdeatencion`);

--
-- Indices de la tabla `estados_externos`
--
ALTER TABLE `estados_externos`
  ADD PRIMARY KEY (`id_estado_externo`);

--
-- Indices de la tabla `estados_internos`
--
ALTER TABLE `estados_internos`
  ADD PRIMARY KEY (`id_estado_interno`);

--
-- Indices de la tabla `medios_ingreso_queja`
--
ALTER TABLE `medios_ingreso_queja`
  ADD PRIMARY KEY (`id_medio_ingreso_queja`);

--
-- Indices de la tabla `puntosdeatencion`
--
ALTER TABLE `puntosdeatencion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `region_puntodeatencion` (`region_puntodeatencion`);

--
-- Indices de la tabla `queja`
--
ALTER TABLE `queja`
  ADD PRIMARY KEY (`id_queja`),
  ADD KEY `medio_ingreso_queja` (`medio_ingreso_queja`),
  ADD KEY `oficina` (`oficina`),
  ADD KEY `dpi_empleado` (`dpi_empleado`),
  ADD KEY `tipo_queja` (`tipo_queja`),
  ADD KEY `estado_externo` (`estado_externo`),
  ADD KEY `estado_interno` (`estado_interno`);

--
-- Indices de la tabla `regiones`
--
ALTER TABLE `regiones`
  ADD PRIMARY KEY (`id_region`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id_rol`);

--
-- Indices de la tabla `tiposqueja`
--
ALTER TABLE `tiposqueja`
  ADD PRIMARY KEY (`siglas`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`dpi`),
  ADD KEY `id_puntosdeatencion` (`id_puntosdeatencion`),
  ADD KEY `region` (`region`);

--
-- Indices de la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD PRIMARY KEY (`id_userol`),
  ADD KEY `id_rol` (`id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asignar_queja_punto`
--
ALTER TABLE `asignar_queja_punto`
  MODIFY `id_asignacion_queja_punto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `estados_externos`
--
ALTER TABLE `estados_externos`
  MODIFY `id_estado_externo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `estados_internos`
--
ALTER TABLE `estados_internos`
  MODIFY `id_estado_interno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `medios_ingreso_queja`
--
ALTER TABLE `medios_ingreso_queja`
  MODIFY `id_medio_ingreso_queja` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `puntosdeatencion`
--
ALTER TABLE `puntosdeatencion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `queja`
--
ALTER TABLE `queja`
  MODIFY `id_queja` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `regiones`
--
ALTER TABLE `regiones`
  MODIFY `id_region` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id_puntosdeatencion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  MODIFY `id_userol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `asignar_queja_punto`
--
ALTER TABLE `asignar_queja_punto`
  ADD CONSTRAINT `asignar_queja_punto_ibfk_1` FOREIGN KEY (`id_queja`) REFERENCES `queja` (`id_queja`),
  ADD CONSTRAINT `asignar_queja_punto_ibfk_2` FOREIGN KEY (`id_puntosdeatencion`) REFERENCES `puntosdeatencion` (`id`);

--
-- Filtros para la tabla `puntosdeatencion`
--
ALTER TABLE `puntosdeatencion`
  ADD CONSTRAINT `puntosdeatencion_ibfk_1` FOREIGN KEY (`region_puntodeatencion`) REFERENCES `regiones` (`id_region`);

--
-- Filtros para la tabla `queja`
--
ALTER TABLE `queja`
  ADD CONSTRAINT `queja_ibfk_1` FOREIGN KEY (`medio_ingreso_queja`) REFERENCES `medios_ingreso_queja` (`id_medio_ingreso_queja`),
  ADD CONSTRAINT `queja_ibfk_2` FOREIGN KEY (`oficina`) REFERENCES `puntosdeatencion` (`id`),
  ADD CONSTRAINT `queja_ibfk_3` FOREIGN KEY (`dpi_empleado`) REFERENCES `usuarios` (`dpi`),
  ADD CONSTRAINT `queja_ibfk_4` FOREIGN KEY (`tipo_queja`) REFERENCES `tiposqueja` (`siglas`),
  ADD CONSTRAINT `queja_ibfk_5` FOREIGN KEY (`estado_externo`) REFERENCES `estados_externos` (`id_estado_externo`),
  ADD CONSTRAINT `queja_ibfk_6` FOREIGN KEY (`estado_interno`) REFERENCES `estados_internos` (`id_estado_interno`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`id_puntosdeatencion`) REFERENCES `puntosdeatencion` (`id`),
  ADD CONSTRAINT `usuarios_ibfk_2` FOREIGN KEY (`region`) REFERENCES `regiones` (`id_region`);

--
-- Filtros para la tabla `usuario_rol`
--
ALTER TABLE `usuario_rol`
  ADD CONSTRAINT `usuario_rol_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `rol` (`id_rol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
