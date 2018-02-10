import React, { Component } from 'react';
import { secondsFormat } from '../../services/timeService';
import './player.scss';
import classnames from 'classnames';
import {getOffsetLeft} from '../../services/utils';

class Player extends Component {
    constructor () {
        super();
        this.state = {
            ratio: 0
        };
        //same instance for removeEventListener
        this.updateRatio = this.updateRatio.bind(this);
        this.handleEndedEvent = this.handleEndedEvent.bind(this);
    }

    componentDidUpdate () {
        const isPlaying = !this.audio.paused && !this.audio.ended && this.audio.readyState > 2;
        if (this.props.isPlaying && !isPlaying) {
            this.audio.play();
        } else if (!this.props.isPlaying && isPlaying) {
            this.audio.pause();
        }
    }

    componentDidMount () {
        this.audio.addEventListener('timeupdate', this.updateRatio);
        this.audio.addEventListener('ended', this.handleEndedEvent);
    }

    componentWillUnmount () {
        this.audio.removeEventListener('timeupdate', this.updateRatio);
        this.audio.removeEventListener('ended', this.handleEndedEvent);
    }

    updateRatio () {
        this.setState({
            ratio: this.audio.currentTime / this.audio.duration
        });
    }

    handleEndedEvent () {
        if (!this.props.loop) {
            this.nextTrack();
        }
    }

    moveHandle (e) {
        const offset = getOffsetLeft(this.line);
        const ratio = (e.clientX - offset) / this.line.offsetWidth;
        this.audio.currentTime = Math.round(ratio * this.audio.duration);
        this.updateRatio();
    }

    prevTrack () {
        this.props.setSong(this.props.prevTrack);
    }

    nextTrack () {
        this.props.setSong(this.props.nextTrack);
    }

    render () {
        const percentage = `${this.state.ratio * 100}%`;
        const {song, isPlaying} = this.props;
        const currentTime = this.audio && this.audio.currentTime;
        const duration = this.audio && this.audio.duration || 0;

        return (
            <div className='player-bottom'>
                <div className="container">
                    <div className="col-md-10 d-flex">
                        <div className="controls">
                            <button className="control" onClick={this.prevTrack.bind(this)}>
                                <i className="fa fa-step-backward" aria-hidden="true"/>
                            </button>
                            <button className="control" onClick={isPlaying ? this.props.pause : this.props.play}>
                                <i className={classnames({'fa': true, 'fa-pause': isPlaying, 'fa-play': !isPlaying})}
                                   aria-hidden="true"/>
                            </button>
                            <button className="control" onClick={this.nextTrack.bind(this)}>
                                <i className="fa fa-step-forward" aria-hidden="true"/>
                            </button>
                            <button className="control" onClick={this.props.toggleLoop}>
                                <i className={classnames({'fa fa-repeat': true, 'active': this.props.loop})}
                                   aria-hidden="true"/>
                            </button>
                        </div>

                        <div className="time current">
                            {secondsFormat(currentTime)}
                        </div>

                        <div className='progress-bar-wrapper' ref={el => this.line = el}>
                            <div className='progress-bar-custom' onClick={this.moveHandle.bind(this)}>
                                <div className="time-line"/>
                                <div className="handle" style={{width: percentage}}/>
                            </div>
                        </div>

                        <div className="time">
                            {secondsFormat(duration)}
                        </div>
                    </div>

                    <div className="track col-md-2">
                        <div className="track-image">
                            <img className="img-fluid" src={song && song.album.images[0].url}/>
                        </div>
                        <div className="track-info">
                            <div className="info-line">{song && song.name}</div>
                            <div className="info-line">{song && song.album.artists[0].name}</div>
                        </div>
                    </div>
                </div>

                <audio ref={el => this.audio = el} src={song && song.preview_url}/>
            </div>
        );
    }
}

export default Player;
