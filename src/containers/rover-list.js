import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {selectRover} from '../actions/select-rover-action';
import {selectDate} from '../actions/select-date-action';
import RoverPicker from '../components/rover-picker';

class RoverList extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(rover) {
        const { dispatch, manifestByRover } = this.props;
        dispatch(selectRover(rover));
        dispatch(selectDate(manifestByRover[rover].photo_manifest.max_date));
    }

    render() {
        const { selectedRover } = this.props;
        return (
            <RoverPicker
                value={selectedRover}
                onChange={this.handleChange}
                options={['curiosity', 'opportunity', 'spirit']}
            />
        );
    }
}

const mapStateToProps = state => {

    const { selectedRover, manifestByRover } = state;

    return {
        selectedRover,
        manifestByRover
    }
};

export default connect(mapStateToProps)(RoverList);