import React from 'react';
import configureStore from 'redux-mock-store';
import CameraList from '../../src/containers/camera-list';
import * as selectCameraAction from '../../src/actions/select-camera-action';

const mockStore = configureStore()({
    selectedCamera: 'FHAZ'
});

const dispatch = sinon.spy(mockStore, 'dispatch');

const wrapper = mount(
    <CameraList dispatch={dispatch} store={mockStore}/>
);

describe('<CameraList />', () => {;

    it('should dispatch selectCamera action when camera is selected', () => {

        let selectCamera = sinon.stub(selectCameraAction, 'selectCamera').returns({type: 'selectCamera'});

        wrapper.find('select').simulate('change', { target: { value: 'RHAZ' }});

        sinon.assert.calledOnce(selectCamera);
        sinon.assert.calledWith(selectCamera, 'RHAZ');

        sinon.assert.calledOnce(dispatch);
        sinon.assert.calledWith(dispatch, {type: 'selectCamera'});
    });

});