import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import AuthMenu from './AuthMenu';
import CurrTrack from '../../components/CurrTrack';
import Player from '../../components/Player';
import Playlist from '../../components/Playlist';
import Playlists from '../../components/Playlists';
import Search from '../../components/Search';
import UnauthMenu from './UnauthMenu';
import { getToken, saveToken } from '../../services/utils';


class Root extends Component {
    componentDidMount () {
        const token = getToken();
        if (token) {
            saveToken(token);
            this.props.fetchUser();
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
                            <Route path='/search' component={Search}/>
                            <Route path='/current-track' component={CurrTrack}/>
                            <Route path='/playlist' component={Playlists}/>
                        </Switch>
                    </main>
                </div>
                <Player />
                <Playlist />
            </div>
        );
    }
}

export default Root;
