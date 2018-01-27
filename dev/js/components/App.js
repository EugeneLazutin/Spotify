import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from '../containers/home';
import Login from '../containers/login';


const App = () => (
    <div className="container-fluid h-100">
        <div className="row h-100">
            <nav className="col-sm-3 col-md-2 h-100">
                <Link to='/'>
                    <div className="menu-container">
                        <img className="img-fluid" src="/content/spotify.svg"/>
                    </div>
                </Link>
                <Link to="/login">
                    <div className="menu-container">
                        Login
                    </div>
                </Link>
            </nav>
            <main className="col-sm-9 col-md-10 h-100">
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/login' component={Login}/>
                </Switch>
            </main>
        </div>
    </div>
);

export default App;
