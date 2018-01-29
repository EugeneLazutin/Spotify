import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setSong } from '../../../actions/playerArctions';
import SongItem from './SongItem';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setSong
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(SongItem);