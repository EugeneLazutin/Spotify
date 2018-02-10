import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../../actions/searchActions';
import Search from './Search';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        search
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(Search);