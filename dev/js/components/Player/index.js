import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pause, play, setSong, toggleLoop } from '../../actions/playerArctions';
import { getNextTrack, getPrevTrack } from '../../services/trackService';
import Player from './Player';

const mapStateToProps = state => {
    return {
        song: state.player.song,
        isPlaying: state.player.isPlaying,
        time: state.player.time,
        prevTrack: getPrevTrack(state.player.list, state.player.song),
        nextTrack: getNextTrack(state.player.list, state.player.song),
        loop: state.player.loop
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        play,
        pause,
        setSong,
        toggleLoop
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
