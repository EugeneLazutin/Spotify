import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { logout } from '../../actions/userActions';
import { removeToken } from '../../services/utils';
import Logo from './Logo';


const AuthMenu = (props) => {
    return (
        <nav className="navigation col-sm-6 col-md-4 col-lg-2">
            <Logo />
            <NavLink to="/search" activeClassName="active">
                <div className="menu-container">
                    <i className="fa fa-search" aria-hidden="true"/> <span className="hidden-xs">Search</span>
                </div>
            </NavLink>
            <NavLink to="/current-track" activeClassName="active">
                <div className="menu-container">
                    <i className="fa fa-play-circle" aria-hidden="true"/> <span
                    className="hidden-xs">Now playing</span>
                </div>
            </NavLink>
            <NavLink to="/playlist" activeClassName="active">
                <div className="menu-container">
                    <i className="fa fa-list-ul" aria-hidden="true"/> <span
                    className="hidden-xs">Playlist</span>
                </div>
            </NavLink>
            <a href="/#" onClick={() => {
                removeToken();
                props.logout();
            }}>
                <div className="menu-container">
                    <i className="fa fa-sign-out" aria-hidden="true"/> <span className="hidden-xs">Logout</span>
                </div>
            </a>
        </nav>
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        logout
    }, dispatch);
};

export default connect(null, mapDispatchToProps, null, {pure: false})(AuthMenu);
