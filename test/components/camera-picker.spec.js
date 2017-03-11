import React from 'react';
import CameraPicker from '../../src/components/camera-picker';

describe('<CameraPicker />', () => {
    const props = {
        options: [
            {abbreviation: 'ALL', camera: 'All Cameras'},
            {abbreviation: 'FHAZ', camera: 'Front Hazard Avoidance Camera'},
            {abbreviation: 'RHAZ', camera: 'Rear Hazard Avoidance Camera'},
            {abbreviation: 'MAST', camera: 'Mast Camera'},
            {abbreviation: 'CHEMCAM', camera: 'Chemistry and Camera Complex'},
            {abbreviation: 'MAHLI', camera: 'Mars Hand Lens Imager'},
            {abbreviation: 'MARDI', camera: 'Mars Descent Imager'},
            {abbreviation: 'NAVCAM', camera: 'Navigation Camera'},
            {abbreviation: 'PANCAM', camera: 'Panoramic Camera'},
            {abbreviation: 'MINITES', camera: 'Miniature Thermal Emission Spectrometer (Mini-TES)'}
        ],
        value: 'curiosity',
        onChange: sinon.stub()
    };
    const wrapper = shallow(<CameraPicker {...props}/>);

    it('should be a span', () => {
        expect(wrapper.type()).to.eql('span');
    });

    it('should populate select with options', () => {
        expect(wrapper.find('select').children()).to.have.length(props.options.length);
    });

    it('should call onChange callback function when option is selcted', () => {
        wrapper.find('select').simulate('change', { target: { value: 'opportunity' }});
        sinon.assert.calledWith(props.onChange, 'opportunity');
    });
});