import React, { Component } from 'react';

class SongItem extends Component {
    render () {
        const {song} = this.props;
        const artist = song.album.artists[0] || {};

        return (
            <div className="song-item" onClick={this.play.bind(this)}>
                <img src={song.album.images[0].url} className="img-fluid"/>
                <div className="song-info">
                    <div className="info-line" title={artist.name}>
                        <i className="fa fa-user-circle" aria-hidden="true"></i>
                        {artist.name}
                    </div>
                    <div className="info-line" title={song.album.name}>
                        <i className="fa fa-book" aria-hidden="true"></i>
                        {song.album.name}
                    </div>
                    <div className="info-line" title={song.name}>
                        <i className="fa fa-music" aria-hidden="true"></i>
                        {song.name}
                    </div>
                </div>
            </div>
        );
    }

    play () {
        this.props.setSong(this.props.song);
    }
}

export default SongItem;
