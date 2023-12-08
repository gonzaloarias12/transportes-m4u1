import React from 'react';
import '\frontend\transportes-frontend\src\styles\components\layout\Nav.css'

import { NavLink } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav >
            <div>
                <ul>
                    <li>< Link to="/" className={({ isActive }) => isActive ? "activo" : undefined }>Home</Link></li>
                    <li>< Link to="/nosotros" className={({ isActive }) => isActive ? "activo" : undefined }>Nosotros</Link></li>
                    <li>< Link to="/novedaes" className={({ isActive }) => isActive ? "activo" : undefined }>Novedades</Link></li>
                    <li>< Link to="/contacto" className={({ isActive }) => isActive ? "activo" : undefined }>Contacto</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;