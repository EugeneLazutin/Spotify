import React, { Component } from 'react';
import SongItem from './SongItem';
import './songList.scss';

class SongList extends Component {
    render () {
        const {songs} = this.props;

        const songList = songs.map(song => {
            return <SongItem song={song} key={song.id}/>;
        });

        return (
            <div className="song-list">
                { songList }
            </div>
        );
    }
}


export default SongList;
