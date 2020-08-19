import React from 'react'
import { Link } from 'react-router-dom';

const NavbarLink = () => {
    return (
        <li className="nav-item active">
            <Link to="/" className="text-decoration-none nav-link h5">
                Menu<span className="sr-only">(current)</span>
            </Link>
        </li>
    )
}

export default NavbarLink
