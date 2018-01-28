import React from 'react';
import SearchBar from './SearchBar';
import SongList from './SongList';

export default () => {
    return (
        <div className="h-100 w-100">
            <SearchBar />
            <SongList />
        </div>
    );
};
