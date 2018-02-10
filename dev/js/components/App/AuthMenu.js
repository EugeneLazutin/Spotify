import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const AuthMenu = () => {
    return (
        <nav className="col-sm-3 col-md-2 h-100">
            <Logo />
            <Link to="/search">
                <div className="menu-container">
                    Search
                </div>
            </Link>
            <Link to="/current-track">
                <div className="menu-container">
                    Now playing
                </div>
            </Link>
            <Link to="/playlist">
                <div className="menu-container">
                    Playlist
                </div>
            </Link>
        </nav>
    );
};

export default AuthMenu;