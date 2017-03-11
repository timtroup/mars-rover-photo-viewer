import React from 'react';
import RoverPicker from '../../src/components/rover-picker';
import sinon from 'sinon';

describe('<RoverPicker />', () => {
    const props = {
        options: ['curiosity', 'opportunity', 'spirit'],
        value: 'curiosity',
        onChange: sinon.stub()
    };
    const wrapper = shallow(<RoverPicker {...props}/>);

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