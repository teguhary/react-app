import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-xl navbar-light bg-light">
                <div className="container-fluid m-3">
                    <NavLink className="navbar-brand mx-auto" to="/">
                        <a href="/" className="logo">
                            <img className="logo" src="http://placekitten.com/50/50"></img>
                        </a>
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto">
                            <NavLink exact className="nav-link mx-3" to="/">Home</NavLink>
                            <NavLink className="nav-link mx-3" to="/shop" >Shop</NavLink>
                            <NavLink className="nav-link mx-3" to="/contact-us">Contact Us</NavLink>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-0">
                            <NavLink className="nav-link mx-3" to="/">Cart</NavLink>
                            <NavLink className="nav-link mx-3" to="/">User</NavLink>
                            <NavLink className="nav-link mx-3" to="/">Search</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;