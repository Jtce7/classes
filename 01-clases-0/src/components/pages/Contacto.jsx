import React from 'react'

export const Contacto = () => {
  return (
      <section class="contact">
          <h2 class="contact__title">Contáctanos</h2>
          <p class="contact__description">
              ¿Tienes alguna pregunta o comentario? ¡Estamos aquí para ayudarte! Completa el formulario o utiliza la información de contacto a continuación para comunicarte con nosotros.
          </p>
          <div class="contact__content">
              <div class="contact__form">
                  <form>
                      <div class="form-group">
                          <label for="nombre">Nombre:</label>
                          <input type="text" id="nombre" name="nombre" required />
                      </div>
                      <div class="form-group">
                          <label for="email">Correo Electrónico:</label>
                          <input type="email" id="email" name="email" required />
                      </div>
                      <div class="form-group">
                          <label for="mensaje">Mensaje:</label>
                          <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
                      </div>
                      <button class="contact__submit-button" type="submit">Enviar Mensaje</button>
                  </form>
              </div>
              <div class="contact__info">
                  <h3 class="contact__info-title">Información de Contacto</h3>
                  <p><strong>Dirección:</strong> Calle Principal #123, Santiago, Chile</p>
                  <p><strong>Teléfono:</strong> +56 9 1234 5678</p>
                  <p><strong>Correo Electrónico:</strong> info@tuempresa.com</p>
                  <p><strong>Horario de Atención:</strong> Lunes a Viernes, 9:00 AM - 6:00 PM</p>
              </div>
          </div>
      </section>

  )
}

export default Contacto
