import { combineReducers } from 'redux';
import search from './searchReducer';
import player from './playerReducer';
import playlist from './playlistReducer';
import user from './userReducer';

const allReducers = combineReducers({
    search,
    player,
    playlist,
    user
});

export default allReducers;
