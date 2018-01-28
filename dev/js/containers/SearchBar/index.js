import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../../actions/index';
import SearchBar from './SearchBar';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        search
    }, dispatch);
};

export default connect(() => { return {}; }, mapDispatchToProps)(SearchBar);