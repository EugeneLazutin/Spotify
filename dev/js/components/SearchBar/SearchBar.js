import React, { Component } from 'react';

class SearchBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            query: ''
        };
    }

    updateSearchTerm (e) {
        this.setState({
            query: e.target.value
        });
    }

    onKeyPress (e) {
        if (e.key === 'Enter') {
            this.search();
        }
    }

    search () {
        this.props.search(this.state.query);
    }

    render () {
        return (
            <div className="row">
                <div className="input-group track-search-container col-sm-6 col-md-5 col-lg-4 col-xl-3">
                    <input onChange={this.updateSearchTerm.bind(this)}
                           onKeyPress={this.onKeyPress.bind(this)}
                           className="form-control" placeholder="Search for..."/>
                    <span className="input-group-btn">
                    <button className="btn btn-secondary" type="button" onClick={this.search.bind(this)}>
                        <i className="fa fa-search search" aria-hidden="true"/>
                    </button>
                </span>
                </div>
            </div>
        );
    }
}

export default SearchBar;
