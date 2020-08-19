import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const NavbarLinkIcons = () => {

    const countCart = useSelector(store => store.cartReducer.countCart)

    return (
        <Link to='/cart' className="nav-link">
            <span className="material-icons">
                local_mall
            </span>
            <span className="badge rounded-pill bg-warning">
                {countCart}
            </span>
        </Link>
    )
}

export default NavbarLinkIcons
