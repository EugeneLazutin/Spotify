import React, { Component } from 'react';
import { secondsFormat } from '../../services/timeService';
import './player.scss';

class Player extends Component {
    constructor () {
        super();
        this.state = {
            ratio: 0
        };
        //same instance for removeEventListener
        this.updateRatio = this.updateRatio.bind(this);
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
    }

    componentWillUnmount () {
        this.audio.removeEventListener('timeupdate', this.updateRatio);
    }

    updateRatio () {
        this.setState({
            ratio: this.audio.currentTime / this.audio.duration
        });
    }

    moveHandle (e) {
        const ratio = (e.clientX - this.line.offsetLeft) / this.line.offsetWidth;
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
        const duration = this.audio && this.audio.duration;

        return (
            <div className='player-bottom row'>
                <div className="controls">
                    <button className="control" onClick={this.prevTrack.bind(this)}>
                        <i className="fa fa-step-backward" aria-hidden="true"/>
                    </button>
                    <button className="control" onClick={isPlaying ? this.props.pause : this.props.play}>
                        <i className={'fa ' + (isPlaying ? 'fa-pause' : 'fa-play')} aria-hidden="true"/>
                    </button>
                    <button className="control" onClick={this.nextTrack.bind(this)}>
                        <i className="fa fa-step-forward" aria-hidden="true"/>
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

                <audio ref={el => this.audio = el} src={song.preview_url}/>
            </div>
        );
    }
}

export default Player;
