import React,{useEffect} from 'react'
import NavbarBrand from './NavbarBrand';
import NavbarToggler from './NavbarToggler';
import NavbarLink from './NavbarLink';
import NavbarLinkIcons from './NavbarLinkIcons';
import NavbarDropDown from './NavbarDropDown';
import { useDispatch } from 'react-redux';
import {getProductSuccess} from '../../redux/cartDucks';
const Navbar = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProductSuccess())
    }, [dispatch])

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white px-5 fixed-top">
            <NavbarBrand />
            <NavbarToggler />
            <div className="collapse navbar-collapse ml-auto" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto mr-5">
                    <NavbarLink />
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavbarLinkIcons />
                    </li>
                    <NavbarDropDown />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
