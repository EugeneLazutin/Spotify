import { SET_TRACK_LIST, SET_SONG, PLAY, PAUSE } from '../constants/actionTypes';

const defaultState = {
    isPlaying: false,
    song: null
};

function playerReducer (state = defaultState, action) {
    switch (action.type) {
        case SET_TRACK_LIST:
            return Object.assign({}, state, {list: action.list});
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
        default:
            return state;
    }
}

export default playerReducer;
