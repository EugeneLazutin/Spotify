import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pause, play, updateTime } from '../../actions/playerArctions';
import Player from './Player';

const mapStateToProps = state => {
  return {
      song: state.player.song || {},
      isPlaying: state.player.isPlaying,
      time: state.player.time
  };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        play,
        pause,
        updateTime
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
