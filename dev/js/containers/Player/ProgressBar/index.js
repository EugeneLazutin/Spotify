import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateTime } from '../../../actions/playerArctions';
import ProgressBar from './ProgressBar';

function mapStateToProps (state) {
    return {
        time: state.player.time,
        duration: state.player.song && state.player.song.duration_ms || 0
    };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateTime
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);