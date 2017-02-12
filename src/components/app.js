import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {fetchManifest} from '../actions/manifest-action';
import ImageList from '../containers/image-list';
import DateSelector from '../containers/date-selector';
import RoverList from '../containers/rover-list';
import CameraList from '../containers/camera-list';
import FindPhotos from '../containers/find-photos';

class App extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(fetchManifest('curiosity'));
        dispatch(fetchManifest('opportunity'));
        dispatch(fetchManifest('spirit'));
    }

    render() {
        return (
            <div>
                <RoverList />
                <DateSelector />
                <CameraList />
                <FindPhotos />
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
