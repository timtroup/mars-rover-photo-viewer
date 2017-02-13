import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class RoverInfo extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { name, launch_date, landing_date, status, total_photos, max_date } = this.props;

        if(name) {
            return (
                <div>
                    Name: {name}<br/>
                    Launch: {launch_date}<br/>
                    Landing: {landing_date}<br/>
                    Status: {status}<br/>
                    Total photos: {total_photos}<br/>
                    Latest photo taken: {max_date}
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

const mapStateToProps = state => {

    const { manifestByRover, selectedRover } = state;

    if(manifestByRover[selectedRover].photo_manifest) {
        return {
            landing_date: manifestByRover[selectedRover].photo_manifest.landing_date,
            launch_date: manifestByRover[selectedRover].photo_manifest.launch_date,
            max_date: manifestByRover[selectedRover].photo_manifest.max_date,
            max_sol: manifestByRover[selectedRover].photo_manifest.max_sol,
            name: manifestByRover[selectedRover].photo_manifest.name,
            status: manifestByRover[selectedRover].photo_manifest.status,
            total_photos: manifestByRover[selectedRover].photo_manifest.total_photos
        }
    } else {
        return {};
    }
};

export default connect(mapStateToProps)(RoverInfo);