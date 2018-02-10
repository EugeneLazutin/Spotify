import classnames from 'classnames';
import React, { Component } from 'react';

class SongItem extends Component {
    render () {
        const {song, songId, isPlaying} = this.props;
        const isSelected = songId === song.id;
        const artist = song.album.artists[0] || {};

        return (
            <div className="song-item" onClick={this.play.bind(this)}>
                <img src={song.album.images[0].url} className="img-fluid"/>
                <div className="song-info">
                    <div className="info-line" title={artist.name}>
                        <i className="fa fa-user-circle" aria-hidden="true"/>
                        {artist.name}
                    </div>
                    <div className="info-line" title={song.album.name}>
                        <i className="fa fa-book" aria-hidden="true"/>
                        {song.album.name}
                    </div>
                    <div className="info-line" title={song.name}>
                        <i className="fa fa-music" aria-hidden="true"/>
                        {song.name}
                    </div>
                </div>
                {song.preview_url
                    ? playControl(isSelected, isPlaying)
                    : null}
            </div>
        );
    }

    play () {
        if(this.props.song.preview_url) {
            if (this.props.song.id === this.props.songId) {
                if (this.props.isPlaying) {
                    this.props.pause();
                } else {
                    this.props.play();
                }
            } else {
                this.props.onTrackSelected();
                this.props.setSong(this.props.song);
            }
        }
    }
}

const playControl = (isSelected, isPlaying) => {
    return (
        <div className={classnames({'control': true, 'selected': isSelected})}>
            <img src={isSelected && isPlaying ? '/content/pause.svg' : '/content/play.svg'} className="image"/>
        </div>);
};

export default SongItem;
