import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import SongList from '../SongList';

class Search extends Component {
    search (query) {
        if (query) {
            this.props.search(query, 1);
        }
    }

    render () {
        return (
            <div className="h-100 d-flex flex-column">
                <SearchBar search={this.search.bind(this)}/>
                <SongList />
            </div>
        )
    }
}

export default Search;
