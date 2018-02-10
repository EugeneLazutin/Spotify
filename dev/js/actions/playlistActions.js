import axios from 'axios';
import {
    HIDE_PLAYLIST,
    SET_PLAYLIST,
    SET_PLAYLIST_PAGE,
    SET_PLAYLISTS,
    SHOW_PLAYLIST,
    TOGGLE_VIEW
} from '../constants/actionTypes';
import {searchLimit} from '../constants/app';

const setPlaylists = (playlists, total, limit) => {
    return {
        type: SET_PLAYLISTS,
        playlists,
        total,
        limit
    };
};

const setPlaylistPage = page => {
    return {
        type: SET_PLAYLIST_PAGE,
        page
    };
};

const setPlaylist = (playlist, tracks) => {
    return {
        type: SET_PLAYLIST,
        playlist,
        tracks
    };
};


export const fetchPlaylists = (page) => {
    return dispatch => {
        dispatch(setPlaylistPage(page));

        axios.get(`https://api.spotify.com/v1/me/playlists?offset=${(page - 1) * searchLimit}&limit=${searchLimit}`)
            .then(resp => {
                dispatch(setPlaylists(resp.data.items, resp.data.total, resp.data.limit));
            })
            .catch(resp => {
                alert(resp.message);
            });
    };
};

export const fetchPlaylist = (userId, playlist) => {
    return dispatch => {
        axios.get(`https://api.spotify.com/v1/users/${userId}/playlists/${playlist.id}/tracks`)
            .then(resp => {
                const tracks = resp.data.items.map(item => item.track);
                dispatch(setPlaylist(playlist, tracks));
            })
            .catch(resp => {
                alert(resp.message);
            });
    };
};

export const showPlaylist = () => {
    return {
        type: SHOW_PLAYLIST
    };
};

export const hidePlaylist = () => {
    return {
        type: HIDE_PLAYLIST
    };
};

export const toggleView = () => {
    return {
        type: TOGGLE_VIEW
    };
};


