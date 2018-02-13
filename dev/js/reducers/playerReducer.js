import { PAUSE, PLAY, SET_SONG, SET_TRACK_LIST, TOGGLE_LOOP } from '../constants/actionTypes';

const defaultState = {
    isPlaying: false,
    song: null,
    loop: false
};

function playerReducer (state = defaultState, action) {
    switch (action.type) {
        case SET_TRACK_LIST:
            return Object.assign({}, state, {list: action.list});
        case SET_SONG:
            if(state.song && state.song.id === action.song.id) {
                return Object.assign({}, state, {isPlaying: !state.isPlaying});
            }
            return Object.assign({}, state, {song: action.song, isPlaying: true, time: 0});
        case PLAY:
            if (state.song && !state.isPlaying) {
                return Object.assign({}, state, {isPlaying: true});
            }
            return state;
        case PAUSE:
            if (state.song && state.isPlaying) {
                return Object.assign({}, state, {isPlaying: false});
            }
            return state;
        case TOGGLE_LOOP:
            return Object.assign({}, state, {loop: !state.loop});
        default:
            return state;
    }
}

export default playerReducer;
