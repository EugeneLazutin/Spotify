import React, { Component } from 'react';
import SongItem from './SongItem';
import './songList.scss';

class SongList extends Component {
    render () {
        const {songs, total, limit, page, query} = this.props;

        const songList = songs.map(song => {
            return <SongItem song={song} key={song.id}/>;
        });

        return (
            <div className="search-page">
                <div className="song-list">
                    { songList }
                </div>
                <div>
                    <Pages page={page}
                           pages={Math.ceil(total / limit)}
                           handleClick={(i) => this.props.search(query, i)}/>
                </div>
            </div>
        );
    }
}

function Pages (props) {
    let items = [];
    for (let i = 1; i <= props.pages && i <= 20; i++) {
        items.push((
            <li className={'page-item' + (i === props.page ? ' active' : '')} key={i}>
                <a className="page-link" onClick={() => {
                    props.handleClick(i);
                }}>{i}</a>
            </li>
        ))
    }

    return (
        <nav aria-label="..." className="pagination">
            <ul className="pagination pagination-sm">
                {items}
            </ul>
        </nav>
    );
}

export default SongList;
