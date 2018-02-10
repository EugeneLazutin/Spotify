import React, { Component } from 'react';
import { contains } from '../../services/utils';
import Pagination from '../Pagination';
import SearchBar from '../SearchBar/SearchBar';
import Playlist from './Playlist';
import './playlists.scss';

class Playlists extends Component {
    constructor () {
        super();
        this.state = {
            query: ''
        };
    }

    componentDidMount () {
        if(this.props.isLogged) {
            this.props.fetchPlaylists(1);
        }
    }

    search (query) {
        this.setState({
            query
        });
    }

    render () {
        const {total, limit, page, fetchPlaylists} = this.props;
        let list = this.props.list;

        if (this.state.query) {
            list = list.filter(item => contains(item.name, this.state.query));
        }
        const playlistList = list.map(item => {
            return <Playlist playlist={item} key={item.id}/>;
        });

        return (
            <div>
                <SearchBar search={this.search.bind(this)}/>
                <div className="playlist-page">
                    <div className="playlist-list">
                        { playlistList }
                    </div>
                    <Pagination page={page}
                                pages={Math.ceil(total / limit)}
                                handleClick={(i) => fetchPlaylists(i)}/>
                </div>
            </div>
        );
    }
}


export default Playlists;
