// import React from 'react';
// import configureStore from 'redux-mock-store';
// import * as selectDateAction from '../../src/actions/select-date-action';
// import {DateSelector} from '../../src/containers/date-selector';
// import proxyquire from 'proxyquire';
//
// proxyquire.noCallThru();
//
// const DatePicker = () => <div></div>;
//
// // const DateSelector = proxyquire('../../src/containers/date-selector', {
// //     'react-datepicker': DatePicker
// // }).default;
//
// const mockStore = configureStore()({
//     selectedDate: '2017-03-03',
//     selectedRover: 'curiosity',
//     manifestByRover: {
//         curiosity: {
//             photo_manifest: {}
//         }
//     }
// });
//
// const dispatch = sinon.spy(mockStore, 'dispatch');
//
// const wrapper = shallow(
//     <DateSelector store={mockStore}/>
// );
//
// describe('<DateSelector />', () => {
//
//     it('should dispatch selectDate action when date is selected', () => {
//
//         let selectDate = sinon.stub(selectDateAction, 'selectDate').returns({type: 'selectDate'});
//
//         // expect(wrapper.find('div')).to.have.lengthOf(1);
//
//         wrapper.instance().getWrappedInstance().handleChange('2017-03-03');
//
//         sinon.assert.calledOnce(selectDate);
//         sinon.assert.calledWith(selectDate, '2017-03-03');
//         //
//         sinon.assert.calledOnce(dispatch);
//         // sinon.assert.calledWith(dispatch, {type: 'selectDate'});
//     });
//
// });