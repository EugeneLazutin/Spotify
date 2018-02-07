import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pause, play, setSong, updateTime } from '../../actions/playerArctions';
import { getNextTrack, getPrevTrack } from '../../services/trackService';
import Player from './Player';

const mapStateToProps = state => {
    return {
        song: state.player.song || {},
        isPlaying: state.player.isPlaying,
        time: state.player.time,
        prevTrack: getPrevTrack(state.search.songs, state.player.song),
        nextTrack: getNextTrack(state.search.songs, state.player.song)
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        play,
        pause,
        updateTime,
        setSong
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
