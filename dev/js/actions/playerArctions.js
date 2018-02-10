import {SET_TRACK_LIST, SET_SONG, PLAY, PAUSE} from '../constants/actionTypes';

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