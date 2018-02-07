import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { search } from '../../actions/index';
import SongList from './SongList';

function mapStateToProps (state) {
    return {
        songs: state.search.songs || [],
        total: state.search.total || 0,
        limit: state.search.limit || 0,
        page: state.search.page || 0,
        query: state.search.query || ''
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        search
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SongList);