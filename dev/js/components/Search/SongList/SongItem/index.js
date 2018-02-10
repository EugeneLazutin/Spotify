import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSong, pause, play } from '../../../../actions/playerArctions';
import SongItem from './SongItem';


const mapStateToProps = (state) => {
  return {
      songId: state.player.song && state.player.song.id || null,
      isPlaying: state.player.isPlaying
  };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setSong,
        pause,
        play
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SongItem);