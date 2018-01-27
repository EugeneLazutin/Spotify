import React from 'react';
import Login from '../containers/login';


const App = () => (
    <div className="container-fluid h-100">
        <div className="row h-100">
            <nav className="col-sm-3 col-md-2 h-100">
                <div className="menu-container">
                    <img className="img-fluid" src="/content/spotify.svg"/>
                </div>
                <div className="menu-container">
                    Login
                </div>
            </nav>
            <main className="col-sm-9 col-md-10 h-100">
            <Login/>
            </main>
        </div>
    </div>
);

export default App;
