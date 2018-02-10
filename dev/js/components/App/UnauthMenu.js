import React from 'react';
import { loginUrl } from '../../constants/app';
import Logo from './Logo';

const UnauthMenu = () => {
    return (
        <nav className="col-sm-3 col-md-2 h-100">
            <Logo />
            <a href={loginUrl}>
                <div className="menu-container">Sign In Using Spotify</div>
            </a>
        </nav>
    );
};

export default UnauthMenu;