import React from 'react';
import configureStore from 'redux-mock-store';
import FindPhotos from '../../src/containers/find-photos';
import * as photosAction from '../../src/actions/photos-action';
import * as preloadPhotosAction from '../../src/actions/preload-photo-action';
import Promise from 'es6-promise';

const mockStore = configureStore()({
    selectedRover: 'curiosity',
    selectedCamera: 'RHAZ',
    selectedDate: '2017-03-03'
});

const dispatch = sinon.stub(mockStore, 'dispatch');

const wrapper = mount(
    <FindPhotos store={mockStore}/>
);

describe('<FindPhotos />', () => {

    it('should dispatch selectRover action when rover is selected', (done) => {

        let deletePhotos = sinon.stub(preloadPhotosAction, 'deletePhotos').returns({type: 'deletePhotos'});
        let fetchPhotos = sinon.stub(photosAction, 'fetchPhotos').returns({type: 'fetchPhotos'});
        let preloadPhotos = sinon.stub(preloadPhotosAction, 'preloadPhotos').returns({type: 'preloadPhotos'});

        dispatch.withArgs({type: 'fetchPhotos'}).returns(Promise.resolve({photos: {}}));

        wrapper.find('Button').simulate('click');

        sinon.assert.calledOnce(deletePhotos);

        sinon.assert.calledOnce(fetchPhotos);
        sinon.assert.calledWith(fetchPhotos, 'curiosity', '2017-03-03', 'RHAZ');

        sinon.assert.calledTwice(dispatch);
        sinon.assert.calledWith(dispatch, {type: 'deletePhotos'});
        sinon.assert.calledWith(dispatch, {type: 'fetchPhotos'});

        //TODO feels a bit of a hacky way to wait until the fetchPhotos promise resolves
        setTimeout(function(){
            sinon.assert.calledOnce(preloadPhotos);
            sinon.assert.calledWith(preloadPhotos, {});
            sinon.assert.calledWith(dispatch, {type: 'preloadPhotos'});
            done();
        }, 1000)
    });

});