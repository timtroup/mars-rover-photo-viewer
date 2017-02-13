import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

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
                <table className="table table-striped">
                    <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td>Launch Date (DD/MM/YYYY)</td>
                        <td>{launch_date}</td>
                    </tr>
                    <tr>
                        <td>Landing Date (DD/MM/YYYY)</td>
                        <td>{landing_date}</td>
                    </tr>
                    <tr>
                        <td>Status</td>
                        <td>{status}</td>
                    </tr>
                    <tr>
                        <td>Total photos</td>
                        <td>{total_photos}</td>
                    </tr>
                    <tr>
                        <td>Latest photo taken (DD/MM/YYYY)</td>
                        <td>{max_date}</td>
                    </tr>
                    </tbody>
                </table>
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
            landing_date: moment(manifestByRover[selectedRover].photo_manifest.landing_date, 'YYYY-MM-DD').format('DD/MM/YYYY'),
            launch_date: moment(manifestByRover[selectedRover].photo_manifest.launch_date, 'YYYY-MM-DD').format('DD/MM/YYYY'),
            max_date: moment(manifestByRover[selectedRover].photo_manifest.max_date, 'YYYY-MM-DD').format('DD/MM/YYYY'),
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