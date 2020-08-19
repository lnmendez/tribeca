import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo_tribeca.png';

const NavbarBrand = () => {
    return (
        <Link to='/' className="navbar-brand">
                <img src={logo} alt="" loading="lazy" width={70} height={50} />
        </Link>
    )
}

export default NavbarBrand
