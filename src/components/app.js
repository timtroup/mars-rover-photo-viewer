import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {fetchManifest} from '../actions/manifest-action';
import {fetchPhotos} from '../actions/photos-action';
import ImageList from '../containers/image-list';
import DateSelector from '../containers/date-selector';
import RoverList from '../containers/rover-list';
import CameraList from '../containers/camera-list';

class App extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchManifest('curiosity'));
        dispatch(fetchManifest('opportunity'));
        dispatch(fetchManifest('spirit'));
        dispatch(fetchPhotos('curiosity', '1000', 'fhaz'));
    }

    render() {
        return (
            <div>
                <RoverList />
                <DateSelector />
                <CameraList />
                <ImageList />
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
    }
};

export default connect(mapStateToProps)(App);
