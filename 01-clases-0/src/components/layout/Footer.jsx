import React from 'react';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__logo">
                    <h1 className="footer__company-name">Salon Précieux</h1>
                    <p className="footer__slogan">Sofisticación en Cada Detalle</p>
                </div>
                <div className="footer__contact">
                    <p>Contacto:</p>
                    <p>Teléfono: +123456789</p>
                    <p>Correo Electrónico: info@example.com</p>
                </div>
                <div className="footer__social">
                    <p>Síguenos en:</p>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__copyright">
                &copy; {new Date().getFullYear()} Nombre de la Empresa. Todos los derechos reservados.
            </div>
        </footer>
    );
}

export default Footer;
