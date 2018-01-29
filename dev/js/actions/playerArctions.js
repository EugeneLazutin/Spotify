import {SET_SONG, UPDATE_TIME, PLAY, PAUSE} from '../constants/actionTypes';

export const setSong = song => {
    return {
        type: SET_SONG,
        song
    };
};

export const updateTime = time => {
    return {
        type: UPDATE_TIME,
        time
    };
};

export const play = () => {
    return {
        type: PLAY
    };
};

export const pause = () => {
    return {
        type: PAUSE
    };
};