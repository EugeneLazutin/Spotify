import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to='/' className="hidden-xs">
            <div className="menu-container">
                <img className="img-fluid" src="/content/spotify.svg"/>
            </div>
        </Link>
    );
};

export default Logo;