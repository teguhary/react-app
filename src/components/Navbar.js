import React from 'react';
import { NavLink } from 'react-router-dom';
import Cart from '../assets/cart.png';
import User from '../assets/user.png';
import Search from '../assets/search.png';
import Logo from '../assets/logo.svg'

function Navbar({children}) {
    return (
        <div>
            <nav className="navbar navbar-expand-xl navbar-light bg-light">
                <div className="container-fluid m-2">
                    <NavLink className="navbar-brand mr-auto" to="/">
                        <img className="logo" src={Logo} alt="logo"></img>
                    </NavLink>
                    <div className="collapse navbar-collapse w-100" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto">
                            <NavLink exact className="nav-link mx-3" to="/">Home</NavLink>
                            <NavLink className="nav-link mx-3" to="/shop" >Shop</NavLink>
                            <NavLink className="nav-link mx-3" to="/contact-us">Contact Us</NavLink>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <NavLink className="nav-link mx-3" to="/">
                                <img className="cart" src={Cart} alt="cart"></img>
                            </NavLink>
                            <NavLink className="nav-link mx-3" to="/users">
                                <img className="user" src={User} alt="user"></img>
                            </NavLink>
                            <NavLink className="nav-link mx-3" to="/">
                                <img className="search" src={Search} alt="search"></img>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="py-4">
                {children}
            </div>
        </div>
    );
}

export default Navbar;