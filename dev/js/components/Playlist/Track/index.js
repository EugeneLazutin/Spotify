import Track from './Track';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSong, play, pause } from '../../../actions/playerArctions';

const mapStateToProps = state => {
    return {
        list: state.player.list || [],
        trackId: state.player.song && state.player.song.id || '',
        isPlaying: state.player.isPlaying,
        fullView: state.playlist.fullView
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        play,
        pause,
        setSong
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Track);
