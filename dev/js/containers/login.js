import React, { Component } from 'react';
import { clientId } from '../constants/app';

class Login extends Component {
    constructor () {
        super();
        this.redurectUrl = 'https://accounts.spotify.com/authorize' +
            `?client_id=${clientId}&response_type=token&redirect_uri=http://localhost:3000/`;
    }

    render () {
        return (
            <div className="h-100 w-100">
                <a className="btn btn-dark btn-lg" href={this.redurectUrl}>Sign In Using Spotify</a>
            </div>
        );
    }
}

export default Login;
