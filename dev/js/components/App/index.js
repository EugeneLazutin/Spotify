import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../../actions/userActions';
import App from './App';

function mapStateToProps (state) {
    return {
        isLogged: state.user.isLogged
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchUser
    }, dispatch);
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));