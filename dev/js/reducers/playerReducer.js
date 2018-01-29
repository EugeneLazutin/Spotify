import { SET_SONG, PLAY, PAUSE, UPDATE_TIME } from '../constants/actionTypes';

const defaultState = {
    isPlaying: false,
    time: 0,
    song: null
};

function playerReducer (state = defaultState, action) {
    switch (action.type) {
        case SET_SONG:
            return Object.assign({}, state, {song: action.song, isPlaying: true, time: 0});
        case PLAY:
            if(state.song && !state.isPlaying) {
                return Object.assign({}, state, {isPlaying: true});
            }
            return state;
        case PAUSE:
            if(state.song && state.isPlaying) {
                return Object.assign({}, state, {isPlaying: false});
            }
            return state;
        case UPDATE_TIME:
            return Object.assign({}, state, {time: action.time});
        default:
            return state;
    }
}

export default playerReducer;
