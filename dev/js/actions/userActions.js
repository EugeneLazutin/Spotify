import axios from 'axios';
import { SET_USER } from '../constants/actionTypes';

const setUser = (user) => {
    return {
        type: SET_USER,
        user
    };
};

export const fetchUser = () => {
    return dispatch => {
        axios.get('https://api.spotify.com/v1/me')
            .then(resp => {
                dispatch(setUser(resp.data));
            })
            .catch(resp => {
                alert(resp.message);
            });
    };
};