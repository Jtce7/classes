import React from 'react'
import Hero from '../layout/Hero'
import AcercaDeNosotros from './AcercaDeNosotros'
import GaleriaImagenes from './GaleriaImagenes'
import Testimonios from './Testimonios'


export const Inicio = () => {
  return (
    <div>
        <Hero />
        <br/>
        <AcercaDeNosotros />
        <br/>
        <GaleriaImagenes />
        <br/>
        <Testimonios />
    </div>
  )
}

export default Inicio
