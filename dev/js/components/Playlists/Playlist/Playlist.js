import React, { Component } from 'react';
import './playlist.scss';

class Playlist extends Component {
    render () {
        const {playlist} = this.props;

        return (
            <div className="playlist-item" onClick={this.handleClick.bind(this)}>
                <img src={playlist.images[0].url} className="img-fluid"/>
                <div className="playlist-name" title={playlist.name}>{playlist.name}</div>
            </div>
        );
    }

    handleClick() {
        this.props.fetchPlaylist(this.props.userId, this.props.playlist);
        this.props.showPlaylist();
    }
}

export default Playlist;
