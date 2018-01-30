import moment from 'moment';

export let secondsFormat = (seconds = 0, format = 'mm:ss') => {
    return moment.utc(seconds * 1000).format(format);
};