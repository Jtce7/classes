import React from 'react';

function AcercaDeNosotros() {
    return (
        <section className="about">
            <div className="about__container">
                <div className="about__content">
                    <h2 className="about__title">Acerca de Nosotros</h2>
                    <p className="about__description">
                        Salon Précieux es un oasis de belleza y bienestar. Nuestro equipo de expertos en belleza se dedica a brindar un servicio excepcional para que te sientas renovado y radiante. Nuestra misión es resaltar tu belleza natural y ofrecerte una experiencia inolvidable en cada visita.
                    </p>
                    <ul className="about__values">
                        <li className="about__value">Excelencia en el servicio</li>
                        <li className="about__value">Innovación en belleza</li>
                        <li className="about__value">Satisfacción del cliente</li>
                    </ul>
                </div>
                <div className="about__image-container">
                    <img src="../src/assets/acercadenosotros.jpg" alt="Salon Précieux" className="about__image" />
                </div>
            </div>
        </section>
    );
}

export default AcercaDeNosotros;
