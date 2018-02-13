import classnames from 'classnames';
import React, { Component } from 'react';
import './track.scss';

class Track extends Component {
    render () {
        const {track, fullView} = this.props;

        return (
            <div className={this.trackClass()}>
                <div className={this.infoClass()}>
                    <div className="track-image">
                        <img src={track.album.images[0].url} className="img-fluid"/>
                    </div>
                    <div className={this.nameClass()} title={track.name}>{track.name}</div>
                </div>
                <div className={this.controlsClass()}>
                    <i className={this.musicClass()} aria-hidden="true"/>
                    <i className={this.playClass()} onClick={this.play.bind(this)} aria-hidden="true"/>
                </div>
            </div>
        );
    }

    infoClass () {
        return classnames({
            'mt-1': true,
            'col-10': this.props.fullView
        });
    }

    nameClass () {
        return classnames({
            'track-name': true,
            'd-none': !this.props.fullView
        });
    }

    controlsClass () {
        return classnames({
            'track-controls': true,
            'col-2': this.props.fullView
        });
    }

    trackClass () {
        return classnames({
            'track': true,
            'col-3': !this.props.fullView,
            'col-12 row': this.props.fullView
        });
    }

    musicClass () {
        return classnames({
            'fa fa-music': true,
            'disabled': !this.props.track.preview_url
        });
    }

    playClass () {
        const {track, trackId, isPlaying} = this.props;

        return classnames({
            'fa': true,
            'fa-stop-circle': isPlaying && track.id === trackId,
            'fa-play-circle': !(isPlaying && track.id === trackId),
            'active': track.preview_url,
            'disabled': !track.preview_url
        });
    }

    play () {
        if (this.props.track.preview_url) {
            this.props.onChoose();
            this.props.setSong(this.props.track);
        }
    }
}

export default Track;
