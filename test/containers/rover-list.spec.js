import React from 'react';
import configureStore from 'redux-mock-store';
import RoverList from '../../src/containers/rover-list';
import * as selectRoverAction from '../../src/actions/select-rover-action';
import * as selectDateAction from '../../src/actions/select-date-action';

const mockStore = configureStore()({
    selectedRover: 'curiosity',
    manifestByRover: {
        opportunity: {
            photo_manifest: {
                max_date: '2017-03-03'
            }
        }
    }
});

const dispatch = sinon.spy(mockStore, 'dispatch');

const wrapper = mount(
    <RoverList dispatch={dispatch} store={mockStore}/>
);

describe('<RoverList />', () => {;

    it('should dispatch selectRover action when rover is selected', () => {

        let selectRover = sinon.stub(selectRoverAction, 'selectRover').returns({type: 'selectRover'});
        let selectDate = sinon.stub(selectDateAction, 'selectDate').returns({type: 'selectDate'});

        wrapper.find('select').simulate('change', { target: { value: 'opportunity' }});

        sinon.assert.calledOnce(selectRover);
        sinon.assert.calledWith(selectRover, 'opportunity');

        sinon.assert.calledOnce(selectDate);
        sinon.assert.calledWith(selectDate, '2017-03-03');

        sinon.assert.calledTwice(dispatch);
        sinon.assert.calledWith(dispatch, {type: 'selectRover'});
        sinon.assert.calledWith(dispatch, {type: 'selectDate'});
    });

});