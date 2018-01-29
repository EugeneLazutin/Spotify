import { combineReducers } from 'redux';
import { LOGIN } from '../constants/actionTypes';
import searchReducer from './searchReducer';
import playerReducer from './playerReducer';

function mainReducer (state = { isLogged: false }, action) {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {isLogged: action.isLogged});
        default:
            return state;
    }
}

const allReducers = combineReducers({
    main: mainReducer,
    search: searchReducer,
    player: playerReducer
});

export default allReducers;
