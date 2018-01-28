import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

    render () {
        return (
            <div className="h-100 w-100">
                {this.props.isLogged.toString()}
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        isLogged: state.mainReducer.isLogged
    };
}

export default connect(mapStateToProps)(Home);
