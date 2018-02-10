import { SEARCH, SEARCH_SUCCESS } from '../constants/actionTypes';

function searchReducer (state = {}, action) {
    switch (action.type) {
        case SEARCH:
            return Object.assign({}, state, {
                page: action.page,
                query: action.query
            });
        case SEARCH_SUCCESS:
            return Object.assign({}, state, {
                songs: action.songs,
                total: action.total,
                limit: action.limit
            });
        default:
            return state;
    }
}

export default searchReducer;
