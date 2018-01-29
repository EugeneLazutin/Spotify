import React, { Component } from 'react';
import ProgressBar from './ProgressBar';
import './player.scss';
import moment from 'moment';

class Player extends Component {
    constructor () {
        super();
        this.state = {
            intervalId: null
        };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.isPlaying && !this.props.isPlaying || !nextProps.time) {
            this.startTimer();
        }

        if(!nextProps.isPlaying && this.props.isPlaying) {
            this.clearTimer();
        }
    }

    startTimer() {
        const step = 1000;
        this.clearTimer();
        const intervalId  = setInterval(() => {
            if(this.props.isPlaying) {
                this.props.updateTime(this.props.time + step);
            } else {
                this.clearTimer();
            }
        }, step);

        this.setState({
            intervalId
        });
    }

    clearTimer() {
        if(this.state.intervalId) {
            clearInterval(this.state.intervalId);
            this.setState({
                intervalId: null
            });
        }
    }

    render () {
        const { song, time, isPlaying } = this.props;
        const songDuration = song && song.duration_ms || 0;

        return (
            <div className='player-bottom row'>
                <div className="controls">
                    <button className="control"><i className="fa fa-step-backward" aria-hidden="true"></i></button>
                    <button className="control" onClick={isPlaying ? this.props.pause : this.props.play}>
                        <i className={'fa ' + (isPlaying ? 'fa-pause' : 'fa-play')} aria-hidden="true"></i>
                    </button>
                    <button className="control"><i className="fa fa-step-forward" aria-hidden="true"></i></button>
                </div>

                <div className="time current">
                    {getTime(time)}
                </div>
                <ProgressBar />
                <div className="time">
                    {getTime(songDuration)}
                </div>
            </div>
        );
    }
}

const getTime = ms => {
    return moment.utc(ms).format('mm:ss')
};

export default Player;
