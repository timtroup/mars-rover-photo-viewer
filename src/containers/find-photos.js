import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPhotos} from '../actions/photos-action';
import {Button, Glyphicon} from 'react-bootstrap';

class FindPhotos extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { selectedRover, selectedCamera, selectedDate, dispatch } = this.props;
        return (
            <Button bsStyle="primary"
                onClick={() => dispatch(fetchPhotos(selectedRover, selectedDate, selectedCamera))}>
                <Glyphicon glyph="search" />
                Find Photos</Button>
        );
    }
}

const mapStateToProps = state => {

    const { selectedRover, selectedCamera, selectedDate } = state;

    return {
        selectedRover,
        selectedCamera,
        selectedDate
    }
};

export default connect(mapStateToProps)(FindPhotos);