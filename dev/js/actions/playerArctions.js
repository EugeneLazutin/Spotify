import {SET_TRACK_LIST, SET_SONG, PLAY, PAUSE, TOGGLE_LOOP} from '../constants/actionTypes';

export const setSong = song => {
    return {
        type: SET_SONG,
        song
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

export const setTrackList = (list) => {
    return {
        type: SET_TRACK_LIST,
        list
    };
};

export const toggleLoop = () => {
    return {
        type: TOGGLE_LOOP
    };
};