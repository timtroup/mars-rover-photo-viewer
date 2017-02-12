import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {selectCamera} from '../actions/select-camera-action';
import CameraPicker from '../components/camera-picker';

class CameraList extends Component {

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(camera) {
        const { dispatch } = this.props;
        dispatch(selectCamera(camera));
    }

    render() {
        return (
            <CameraPicker
                value=""
                onChange={this.handleChange}
                options={[
                    {abbreviation: 'FHAZ', camera: 'Front Hazard Avoidance Camera'},
                    {abbreviation: 'RHAZ', camera: 'Rear Hazard Avoidance Camera'},
                    {abbreviation: 'MAST', camera: 'Mast Camera'},
                    {abbreviation: 'CHEMCAM', camera: 'Chemistry and Camera Complex'},
                    {abbreviation: 'MAHLI', camera: 'Mars Hand Lens Imager'},
                    {abbreviation: 'MARDI', camera: 'Mars Descent Imager'},
                    {abbreviation: 'NAVCAM', camera: 'Navigation Camera'},
                    {abbreviation: 'PANCAM', camera: 'Panoramic Camera'},
                    {abbreviation: 'MINITES', camera: 'Miniature Thermal Emission Spectrometer (Mini-TES)'}
                ]}
            />
        );
    }
}

const mapStateToProps = state => {

    return {
    }
};

export default connect(mapStateToProps)(CameraList);