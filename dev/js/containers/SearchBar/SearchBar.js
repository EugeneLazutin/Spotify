import React, { Component } from 'react';

class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = {query: ''};
    }

    updateSearchTerm (e) {
        this.setState({
            query: e.target.value
        });
    }

    search (e) {
        e.preventDefault();
        this.props.search(this.state.query);
    }

    render () {
        return (
            <div className='track-search-container'>
                <form onSubmit={this.search.bind(this)}>
                    <input onChange={this.updateSearchTerm.bind(this)} type='text' placeholder='Search...'/>
                    <button>
                        <i className="fa fa-search search" aria-hidden="true"/>
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBar;
