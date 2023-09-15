import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header className="header">
            <div className="header__logo">
                <h1 className="header__title">Salon Précieux</h1>
            </div>
            <nav className="header__nav">
                <ul className="header__menu">
                    <li className="header__menu-item">
                        <Link to="/" className="header__menu-link">Inicio</Link>
                    </li>
                    <li className="header__menu-item">
                        <Link to="/servicios" className="header__menu-link">Servicios</Link>
                    </li>
                    <li className="header__menu-item">
                        <Link to="/estilistas" className="header__menu-link">Estilistas</Link>
                    </li>
                    <li className="header__menu-item">
                        <Link to="/contacto" className="header__menu-link">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header
