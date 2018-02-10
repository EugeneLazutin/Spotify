import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthMenu from './AuthMenu';
import CurrTrack from '../../components/CurrTrack';
import Player from '../../components/Player';
import Playlist from '../../components/Playlist';
import Playlists from '../../components/Playlists';
import Search from '../../components/Search';
import UnauthMenu from './UnauthMenu';
import { getToken } from '../../services/utils';


class Root extends Component {
    componentWillMount () {
        const token = getToken();
        if (token) {
            this.props.fetchUser();
        }
    }

    render () {
        const {isLogged} = this.props;

        return (
            <div className="container-fluid main-wrapper">
                <div className="row content-body">
                    {isLogged ? <AuthMenu/> : <UnauthMenu/>}
                    <main className="col-sm-6 col-md-8 col-lg-10">
                        <Switch>
                            <Route path='/search' component={Search}/>
                            <Route path='/current-track' component={CurrTrack}/>
                            <Route path='/playlist' component={Playlists}/>
                        </Switch>
                    </main>
                    <Playlist />
                </div>
                <div className="row">
                    <Player />
                </div>
            </div>
        );
    }
}

export default Root;
