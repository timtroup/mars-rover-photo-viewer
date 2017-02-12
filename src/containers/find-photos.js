import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPhotos} from '../actions/photos-action';

class FindPhotos extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { selectedRover, selectedCamera, selectedDate, dispatch } = this.props
        return (
            <button onClick={() => dispatch(fetchPhotos(selectedRover, selectedDate, selectedCamera))}>Find Photos</button>
        );
    }
}

const mapStateToProps = state => {

    const { selectedRover, selectedCamera, selectedDate } = state

    return {
        selectedRover,
        selectedCamera,
        selectedDate
    }
};

export default connect(mapStateToProps)(FindPhotos);