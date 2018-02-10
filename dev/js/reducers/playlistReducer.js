import {
    HIDE_PLAYLIST,
    SET_PLAYLIST,
    SET_PLAYLIST_PAGE,
    SET_PLAYLISTS,
    SHOW_PLAYLIST,
    TOGGLE_VIEW
} from '../constants/actionTypes';

const defaultState = {
    page: 1,
    show: false,
    fullView: true
};

function playlistReducer (state = defaultState, action) {
    switch (action.type) {
        case SET_PLAYLIST_PAGE:
            return Object.assign({}, state, {page: action.page});
        case SET_PLAYLISTS:
            return Object.assign({}, state, {playlists: action.playlists, total: action.total, limit: action.limit});
        case SET_PLAYLIST:
            return Object.assign({}, state, {tracks: action.tracks, playlist: action.playlist});
        case SHOW_PLAYLIST:
            return Object.assign({}, state, {show: true});
        case HIDE_PLAYLIST:
            return Object.assign({}, state, {show: false});
        case TOGGLE_VIEW: {
            return Object.assign({}, state, {fullView: !state.fullView});
        }
        default:
            return state;
    }
}

export default playlistReducer;
