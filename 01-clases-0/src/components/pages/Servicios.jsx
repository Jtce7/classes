import React from 'react'

export const Servicios = () => {
  return (
<section class="services">
    <h2 class="services__title">Nuestros Servicios</h2>
    <div class="services__list">
        {/* Servicio 1 */}
        <div class="services__item">
            <div class="services__category">Corte de Pelo</div>
            <div class="services__icon">
                {/* Agrega aquí un icono relacionado con el servicio (por ejemplo, una imagen o un ícono de font awesome) */}
            </div>
            <h3 class="services__item-title">Corte de Pelo para Hombres</h3>
            <p class="services__item-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis justo nec tellus facilisis.
            </p>
            <p class="services__item-price">$50</p>
            <button class="services__cta-button">Reservar Ahora</button>
        </div>
        {/* Servicio 2 */}
        <div class="services__item">
            <div class="services__category">Maquillaje</div>
            <div class="services__icon">
                {/* Agrega aquí un icono relacionado con el servicio */}
            </div>
            <h3 class="services__item-title">Maquillaje para Eventos</h3>
            <p class="services__item-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis justo nec tellus facilisis.
            </p>
            <p class="services__item-price">$30</p>
            <button class="services__cta-button">Reservar Ahora</button>
        </div>
        {/* Servicio 3 */}
        <div class="services__item">
            <div class="services__category">Uñas</div>
            <div class="services__icon">
                {/* Agrega aquí un icono relacionado con el servicio */}
            </div>
            <h3 class="services__item-title">Manicura y Pedicura</h3>
            <p class="services__item-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis justo nec tellus facilisis.
            </p>
            <p class="services__item-price">$40</p>
            <button class="services__cta-button">Reservar Ahora</button>
        </div>
        {/* Servicio 4 */}
        <div class="services__item">
            <div class="services__category">Tratamientos Faciales</div>
            <div class="services__icon">
                {/* Agrega aquí un icono relacionado con el servicio */}
            </div>
            <h3 class="services__item-title">Tratamiento de Limpieza Facial</h3>
            <p class="services__item-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis justo nec tellus facilisis.
            </p>
            <p class="services__item-price">$60</p>
            <button class="services__cta-button">Reservar Ahora</button>
        </div>
        {/* Servicio 5 */}
        <div class="services__item">
            <div class="services__category">Depilación</div>
            <div class="services__icon">
                {/* Agrega aquí un icono relacionado con el servicio */}
            </div>
            <h3 class="services__item-title">Depilación con Cera</h3>
            <p class="services__item-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis justo nec tellus facilisis.
            </p>
            <p class="services__item-price">$35</p>
            <button class="services__cta-button">Reservar Ahora</button>
        </div>
    </div>
</section>




  )
}

export default Servicios
