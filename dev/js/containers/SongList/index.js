import { connect } from 'react-redux';
import SongList from './SongList';

function mapStateToProps (state) {
    return {
        songs: state.searchReducer.songs || []
    };
}

export default connect(mapStateToProps)(SongList);