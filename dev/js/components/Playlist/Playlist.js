import React, { Component } from 'react';
import { fixModal } from '../../services/utils';
import './playlist.scss';
import Track from './Track';

class Playlist extends Component {
    componentDidMount () {
        $(this.modal).on('hidden.bs.modal', this.props.hidePlaylist);
        $(this.modal).on('shown.bs.modal', fixModal);
    }

    componentWillUnmount () {
        $(this.modal).off('hidden.bs.modal', this.props.hidePlaylist);
        $(this.modal).off('shown.bs.modal', fixModal);
    }

    componentDidUpdate () {
        if (this.props.show && this.props.playlist) {
            $(this.modal).modal('show');
            fixModal();
        } else {
            $(this.modal).modal('hide');
        }
    }

    render () {
        const {list, setTrackList, playlist, fullView, toggleView} = this.props;

        const tracks = list.map(track => {
            return <Track track={track} onChoose={() => setTrackList(list)} key={track.id}/>;
        });

        return (
            <div className="modal fade" ref={el => this.modal = el}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-4">
                                    <img src={playlist && playlist.images[0].url} className="img-fluid playlist-image"/>
                                </div>
                                <div className="col-8">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                    <div className="row">
                                        <div className="col-6 text-right">
                                            <label className="switch">
                                                <input type="checkbox" checked={fullView} onChange={toggleView}/>
                                                <span className="slider"/>
                                            </label>
                                        </div>
                                        <div className="col-6 text-left">
                                            {fullView ? 'Full view' : 'Smart view'}
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        {playlist && playlist.name}<br/>
                                        {playlist && playlist.tracks.total} Tracks
                                    </div>
                                </div>
                            </div>

                            <div className="row playlist-tracks">
                                { tracks }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Playlist;
