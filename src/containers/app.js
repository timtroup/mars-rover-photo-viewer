import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {fetchManifest} from '../actions/manifest-action';

class App extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchManifest('curiosity'));
        dispatch(fetchManifest('opportunity'));
        dispatch(fetchManifest('spirit'));
    }

    render() {
        return (
            <div>Mars Rover Photo Viewer</div>
        );
    }
}

const mapStateToProps = state => {

    return {
    }
};

export default connect(mapStateToProps)(App)
