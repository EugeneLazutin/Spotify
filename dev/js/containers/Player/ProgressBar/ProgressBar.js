import React, { Component } from 'react';
import './progressBar.scss';


class ProgressBar extends Component {
    setTime (e) {
        const percentage = calculatePercentage(e);
        const time = getTime(percentage, this.props.duration);
        this.props.updateTime(time);
    }

    render () {
        const {time, duration} = this.props;
        const percentage = getPercentage(time, duration);

        return (
            <div className='progress-bar-wrapper'>
                <div className='progress-bar-custom' onClick={this.setTime.bind(this)}>
                    <div className="base-line" onClick={stop}/>
                    <div className="bar" style={{width: percentage}} onClick={stop}/>
                    <div className="handle" style={{left: percentage}} onClick={stop}/>
                </div>
            </div>
        );
    }
}

const getPercentage = (time, duration) => {
    return `${time * 100 / duration}%`;
};

const getTime = (percentage, duration) => {
    return percentage * duration;
};

const calculatePercentage = (e) => {
    var pos = e.target.getBoundingClientRect();
    return (e.clientX - pos.x) / e.target.offsetWidth;
};

const stop = e => {
    e.stopPropagation();
};

export default ProgressBar;
