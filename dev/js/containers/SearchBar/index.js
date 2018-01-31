import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../../actions/index';
import SearchBar from './SearchBar';
import './searchBar.scss';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        search
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);