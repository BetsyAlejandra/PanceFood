import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Registro } from "./Registro";
import { PaginaPrincipal } from "./PaginaPrincipal";
import { OpcionesRegistro } from "./OpcionesRegistro";
import { InicioSesion } from "./InicioSesion";
import { Restaurantes } from "./Restaurantes";
import { Compra } from "./Compra";
import { Perfil } from "./Perfil";
import { Canasta } from "./Canasta";


export const MainApp = () => {
    return(
        <>


        <Link to="/"> Inicio </Link>
        <Link to="registrocorreo"> Opciones </Link>
        <Link to="opcionesregistro"> Registro </Link>
        <Link to="home"> HomeInciado </Link>
        <Link to="inicioSesion"> Iniciar Sesion </Link>
        <Link to="restaurantes"> Restaurantes </Link>
        <Link to="compra"> Compra </Link> 
        <Link to="perfil"> Perfil </Link>
        <Link to="carrito"> Carrito </Link>

        
        <Routes>
            <Route path="/" element={ <Home /> }> </Route>
            <Route path="registrocorreo" element={ <OpcionesRegistro /> }></Route>
            <Route path="opcionesregistro" element={ <Registro /> }></Route>
            <Route path="home" element={ <PaginaPrincipal/> }></Route>
            <Route path="iniciosesion" element={ <InicioSesion/> }></Route>
            <Route path="restaurantes" element={ <Restaurantes /> }></Route>
            <Route path="compra" element={ <Compra />}></Route>
            <Route path="perfil" element={ <Perfil />}></Route>
            <Route path="carrito" element={ <Canasta />}></Route>
        </Routes>
        </>
    )
}