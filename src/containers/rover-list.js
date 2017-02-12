import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {selectRover} from '../actions/select-rover-action';
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
        const { dispatch } = this.props;
        dispatch(selectRover(rover));
    }

    render() {
        const { selectedRover } = this.props
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

    const { selectedRover } = state

    return {
        selectedRover
    }
};

export default connect(mapStateToProps)(RoverList);