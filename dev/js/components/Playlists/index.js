import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlaylists } from '../../actions/playlistActions';
import Playlists from './Playlists';

const mapStateToProps = state => {
    return {
        list: state.playlist.playlists || [],
        total: state.playlist.total || 0,
        limit: state.playlist.limit || 0,
        page: state.playlist.page || 1,
        isLogged: state.user.isLogged
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchPlaylists
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlists);
