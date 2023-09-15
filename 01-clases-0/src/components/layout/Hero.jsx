import React from 'react'
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section class="banner">
        <div class="banner-content">
            
            <h1 class="banner-title">Descubre tu Belleza Interior</h1>
            <p class="banner-message">¡Bienvenido a [Nombre del Salón]! Donde la belleza se encuentra con la elegancia. Nuestro equipo de estilistas expertos está aquí para resaltar tu belleza natural y hacerte sentir radiante.</p>
            <Link to="/reservar-cita" class="cta-button">
                <button>Reservar Cita</button>
            </Link>
        </div>
    </section>
  )
}

export default Hero
