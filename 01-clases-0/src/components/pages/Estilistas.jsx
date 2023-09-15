import React from 'react'

export const Estilistas = () => {
  return (
<section class="stylists">
    <h2 class="stylists__title">Nuestros Estilistas</h2>
    <div class="stylists__list">
        {/* Estilista 1 */}
        <div class="stylists__item">
            <div class="stylists__category">Corte de Pelo</div>
            <div class="stylists__icon">
                {/* Agrega la imagen del estilista aquí */}
            </div>
            <h3 class="stylists__item-title">Ana Rodríguez</h3>
            <p class="stylists__item-description">
                Especialista en cortes de pelo modernos y a la moda. Con más de 10 años de experiencia.
            </p>
            <div class="stylists__tags">
                <span class="stylists__tag">Experto</span>
                <span class="stylists__tag">Estilo</span>
            </div>
        </div>
        {/* Estilista 2 */}
        <div class="stylists__item">
            <div class="stylists__category">Maquillaje</div>
            <div class="stylists__icon">
                {/* Agrega la imagen del estilista aquí */}
            </div>
            <h3 class="stylists__item-title">Carlos Gómez</h3>
            <p class="stylists__item-description">
                Maquillador profesional con experiencia en maquillaje para eventos especiales.
            </p>
            <div class="stylists__tags">
                <span class="stylists__tag">Maquillaje</span>
                <span class="stylists__tag">Profesional</span>
            </div>
        </div>
        {/* Estilista 3 */}
        <div class="stylists__item">
            <div class="stylists__category">Uñas</div>
            <div class="stylists__icon">
                {/* Agrega la imagen del estilista aquí */}
            </div>
            <h3 class="stylists__item-title">María López</h3>
            <p class="stylists__item-description">
                Especialista en manicura y pedicura con una pasión por el diseño de uñas creativas.
            </p>
            <div class="stylists__tags">
                <span class="stylists__tag">Manicura</span>
                <span class="stylists__tag">Diseño</span>
            </div>
        </div>
        {/* Estilista 4 */}
        <div class="stylists__item">
            <div class="stylists__category">Tratamientos Faciales</div>
            <div class="stylists__icon">
                {/* Agrega la imagen del estilista aquí */}
            </div>
            <h3 class="stylists__item-title">Luisa Martínez</h3>
            <p class="stylists__item-description">
                Esteticista con experiencia en tratamientos faciales personalizados y rejuvenecimiento de la piel.
            </p>
            <div class="stylists__tags">
                <span class="stylists__tag">Esteticista</span>
                <span class="stylists__tag">Rejuvenecimiento</span>
            </div>
        </div>
        {/* Estilista 5 */}
        <div class="stylists__item">
            <div class="stylists__category">Depilación</div>
            <div class="stylists__icon">
                {/* Agrega la imagen del estilista aquí */}
            </div>
            <h3 class="stylists__item-title">Pedro Sánchez</h3>
            <p class="stylists__item-description">
                Especialista en depilación con cera y métodos de depilación avanzados.
            </p>
            <div class="stylists__tags">
                <span class="stylists__tag">Depilación</span>
                <span class="stylists__tag">Cera</span>
            </div>
        </div>
    </div>
</section>

  )
}

export default Estilistas
