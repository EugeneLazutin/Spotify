import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const UnauthMenu = () => {
    return (
        <nav className="col-sm-3 col-md-2 h-100">
            <Logo />
            <Link to="/login">
                <div className="menu-container">
                    Login
                </div>
            </Link>
        </nav>
    );
};

export default UnauthMenu;