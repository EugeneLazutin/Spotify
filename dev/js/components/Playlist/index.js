import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pause, play, setSong, setTrackList } from '../../actions/playerArctions';
import { hidePlaylist, toggleView } from '../../actions/playlistActions';
import Playlist from './Playlist';

const mapStateToProps = state => {
    return {
        list: state.playlist.tracks || [],
        currTrackId: state.player.song && state.player.song.id || '',
        show: state.playlist.show,
        playlist: state.playlist.playlist || null,
        fullView: state.playlist.fullView
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        play,
        pause,
        setSong,
        setTrackList,
        hidePlaylist,
        toggleView
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);
