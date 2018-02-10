import React from 'react';
import { loginUrl } from '../../constants/app';
import Logo from './Logo';

const UnauthMenu = () => {
    return (
        <nav className="col-sm-6 col-md-4 col-lg-2">
            <Logo />
            <a href={loginUrl}>
                <div className="menu-container">Sign In Using Spotify</div>
            </a>
        </nav>
    );
};

export default UnauthMenu;