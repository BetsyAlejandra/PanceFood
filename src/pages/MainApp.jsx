import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Registro } from "./Registro";
import { PaginaPrincipal } from "./PaginaPrincipal";
import { OpcionesRegistro } from "./OpcionesRegistro";


export const MainApp = () => {
    return(
        <>

        <Link to="/"> Home </Link>
        <Link to="opcionesregistro"> Opciones </Link>
        <Link to="registro"> Registro </Link>
        <Link to="home"> HomeIniciado </Link>

        <Routes>
            <Route path="/" element={ <Home /> }> </Route>
            <Route path="opcionesregistro" element={ <OpcionesRegistro /> }></Route>
            <Route path="registro" element={ <Registro /> }></Route>
            <Route path="home" element={ <PaginaPrincipal/> }></Route>
        </Routes>
        </>
    )
}