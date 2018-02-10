import { SET_USER, LOGOUT } from '../constants/actionTypes';

const defaultState = {
    isLogged: false
};

function playlistReducer (state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return Object.assign({}, state, {user: action.user, isLogged: Boolean(action.user)});
        case LOGOUT:
            return Object.assign({}, state, {user: null, isLogged: false});
        default:
            return state;
    }
}

export default playlistReducer;
