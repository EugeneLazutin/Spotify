import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { login } from '../actions';
import AuthMenu from '../containers/AuthMenu';
import Home from '../containers/home';
import Search from '../containers/Search';
import UnauthMenu from '../containers/UnauthMenu';
import { getHashParams } from '../services/locationService';
import Player from '../containers/Player';
import CurrTrack from '../containers/CurrTrack';


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
                <div className="row content-body">
                    {isLogged ? <AuthMenu/> : <UnauthMenu/>}
                    <main className="col-sm-9 col-md-10">
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/search' component={Search}/>
                            <Route path='/current-track' component={CurrTrack}/>
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
