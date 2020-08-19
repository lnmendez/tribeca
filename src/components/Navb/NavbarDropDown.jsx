import React from 'react'
import { Link } from 'react-router-dom';

const NavbarDropDown = () => {
    return (
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="material-icons">
                person_outline
            </span>
        </a>
        <div className="dropdown-menu dropdown-menu-right"
            aria-labelledby="navbarDropdownMenuLink">
            <Link to='/login' className="text-decoration-none dropdown-item">
                Iniciar sesión
            </Link>
            <Link to='/register' className="text-decoration-none dropdown-item">
               Registrar
            </Link>
        </div>
    </li>
    )
}

export default NavbarDropDown
