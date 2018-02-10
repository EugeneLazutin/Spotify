import React, { Component } from 'react';
import SongItem from './SongItem';
import Pagination from '../../Pagination';
import './songList.scss';

class SongList extends Component {
    render () {
        const {songs, total, limit, page, query} = this.props;

        const songList = songs.map(song => {
            return <SongItem onTrackSelected={this.setTrackList.bind(this)} song={song} key={song.id}/>;
        });

        return (
            <div className="search-page">
                <div className="song-list">
                    { songList }
                </div>
                <div>
                    <Pagination page={page}
                           pages={Math.ceil(total / limit)}
                           handleClick={(i) => this.props.search(query, i)}/>
                </div>
            </div>
        );
    }

    setTrackList() {
        this.props.setTrackList(this.props.songs);
    }
}

export default SongList;
