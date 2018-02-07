import React, { Component } from 'react';
import './currTrack.scss';

class CurrTrack extends Component {

    next () {
        this.props.setSong(this.props.nextTrack);
    }

    prev () {
        this.props.setSong(this.props.prevTrack);
    }

    render () {
        const {song} = this.props;

        if (song && song.id) {
            const artist = song.album.artists[0] || {};

            return (
                <div className="current-track h-100">
                    <button className="control" onClick={this.prev.bind(this)}>
                        <img src="/content/previous.svg" className="img-fluid"/>
                    </button>

                    <div className="track">
                        <div className="play-contor">

                        </div>
                        <img src={song.album.images[0].url} className="img-fluid"/>
                        <div className="track-info">
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

                    <button className="control" onClick={this.next.bind(this)}>
                        <img src="/content/next.svg" className="img-fluid"/>
                    </button>
                </div>
            );
        }

        // TODO: move to separate container
        return (
            <div className="current-track">
                Select some track
            </div>
        );
    }
}


export default CurrTrack;
