import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlaylist, showPlaylist } from '../../../actions/playlistActions';
import Playlist from './Playlist';

const mapStateToProps = state => {
    return {
        userId: state.user.user && state.user.user.id
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        fetchPlaylist,
        showPlaylist
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
