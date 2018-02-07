import {LOGIN, SEARCH, SEARCH_SUCCESS, SEARCH_ERROR, SET_PAGE} from '../constants/actionTypes';
import axios from 'axios';

const searchLimit = 20;

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

export const searchRequest = (query, page) => {
    return {
        type: SEARCH,
        query,
        page
    };
};

export const setSongs = (songs, total, limit) => {
    return {
        type: SEARCH_SUCCESS,
        songs,
        total,
        limit
    };
};

export const searchError = message => {
    return {
        type: SEARCH_ERROR,
        message
    };
};


export const search = (query, page) => {
    return dispatch => {
        dispatch(searchRequest(query, page));

        axios.get(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=${(page - 1) * searchLimit}&limit=${searchLimit}&`)
            .then(resp => {
                dispatch(setSongs(resp.data.tracks.items, resp.data.tracks.total, resp.data.tracks.limit));
            })
            .catch(resp => {
                dispatch(searchError(resp.message));
            });
    };
};
