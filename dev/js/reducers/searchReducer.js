import { SEARCH, SEARCH_ERROR, SEARCH_SUCCESS } from '../constants/actionTypes';

function searchReducer (state = {}, action) {
    switch (action.type) {
        case SEARCH:
            return Object.assign({}, state, {
                searchError: false,
                loading: true,
                page: action.page,
                query: action.query
            });
        case SEARCH_SUCCESS:
            return Object.assign({}, state, {
                songs: action.songs,
                searchError: false,
                loading: false,
                total: action.total,
                limit: action.limit
            });
        case SEARCH_ERROR:
            return Object.assign({}, state, {songs: [], searchError: true, loading: true});
        default:
            return state;
    }
}

export default searchReducer;
