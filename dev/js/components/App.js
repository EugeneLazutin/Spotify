import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { login } from '../actions';
import AuthMenu from '../containers/AuthMenu';
import Home from '../containers/home';
import Login from '../containers/login';
import Search from '../containers/Search';
import UnauthMenu from '../containers/UnauthMenu';
import { getHashParams } from '../services/locationService';
import Player from '../containers/Player';


class App extends Component {
    componentDidMount () {
        let hashParams = getHashParams();

        if (hashParams.access_token) {
            this.props.login(hashParams.access_token);
        }
    }

    render () {
        const {isLogged} = this.props;

        return (
            <div className="container-fluid main-wrapper">
                <div className="row h-100">
                    {isLogged ? <AuthMenu/> : <UnauthMenu/>}
                    <main className="col-sm-9 col-md-10 h-100">
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/login' component={Login}/>
                            <Route path='/search' component={Search}/>
                        </Switch>
                    </main>
                </div>
                <Player />
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        isLogged: state.main.isLogged
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({login}, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
