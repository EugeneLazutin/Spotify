import {LOGIN, SEARCH, SEARCH_SUCCESS, SEARCH_ERROR} from '../constants/actionTypes';
import {dis} from 'redux';
import axios from 'axios';

export const login = (token) => {
    // TODO: where should I put this code?
    const isLogged = Boolean(token);
    if(isLogged) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    return {
        type: LOGIN,
        isLogged
    }
};

export const searchRequest = () => {
    return {
        type: SEARCH
    };
};

export const setSongs = songs => {
    return {
        type: SEARCH_SUCCESS,
        songs
    };
};

export const searchError = message => {
    return {
        type: SEARCH_ERROR,
        message
    };
};


export const search = (query) => {
    return dispatch => {
        dispatch(searchRequest());

        axios.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track`)
            .then(resp => {
                dispatch(setSongs(resp.data.tracks.items));
            })
            .catch(resp => {
                dispatch(searchError(resp.message));
            });
    };
};
