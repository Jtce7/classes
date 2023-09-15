import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"   
import Inicio from "../components/pages/Inicio";
import Servicios from "../components/pages/Servicios";
import Estilistas from "../components/pages/Estilistas";
import Contacto from "../components/pages/Contacto";
import Header from "../components/layout/Header";
import ReservaCita from "../components/pages/ReservaCita";
import Footer from "../components/layout/Footer";

export const Rutas = () => {
    return(
        <BrowserRouter>
            {/*LAYOUT*/}
            <Header />

            {/*Contenido central y rutas */}
            <section id="content" className="content">
                <Routes>
                    <Route path="/" element ={<Inicio />} />
                    <Route path="/inicio" element ={<Inicio />} />
                    <Route path="/servicios" element ={<Servicios />} />
                    <Route path="/estilistas" element ={<Estilistas />} />
                    <Route path="/contacto" element ={<Contacto />} />
                    <Route path="/reservar-cita" element={<ReservaCita />} />
                </Routes>

            </section>

            {/*FOOTER */}
            <Footer />
        </BrowserRouter>


    );
}