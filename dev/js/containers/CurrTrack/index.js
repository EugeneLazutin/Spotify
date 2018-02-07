import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pause, play, setSong } from '../../actions/playerArctions';
import { getNextTrack, getPrevTrack } from '../../services/trackService';
import CurrTrack from './CurrTrack';

const mapStateToProps = state => {
    return {
        song: state.player.song,
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
        setSong
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrTrack);
