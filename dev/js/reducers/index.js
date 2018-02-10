import { combineReducers } from 'redux';
import { LOGOUT } from '../constants/actionTypes';
import player from './playerReducer';
import playlist from './playlistReducer';
import search from './searchReducer';
import user from './userReducer';

const allReducers = combineReducers({
    search,
    player,
    playlist,
    user
});

const rootReducer = (state, action) => {
    if (action.type === LOGOUT) {
        state = undefined;
    }

    return allReducers(state, action)
};

export default rootReducer;
