import photoGalleryData from '../../src/reducers/preload-photo-reducer';

describe('photoGalleryData reducer', () => {

    it('should return the initial state', () => {
        expect(photoGalleryData(undefined, {})).to.eql({
            data: [],
            isFetching: false
        })
    });

    it('should return correct state when REQUEST_PRELOAD_PHOTOS', () => {
        expect(photoGalleryData(
            {
                data: [],
                isFetching: false
            },
            {
                type: 'REQUEST_PRELOAD_PHOTOS'
            }
        )).to.eql({
            data: [],
            isFetching: true
        })
    });

    it('should return correct state when RECEIVE_PRELOAD_PHOTOS', () => {
        expect(photoGalleryData(
            {
                data: [{id: 1}],
                isFetching: false
            },
            {
                type: 'RECEIVE_PRELOAD_PHOTOS',
                photos: [{id: 2}],
                receivedAt: 1458969960969
            }
        )).to.eql({
            data: [{id: 1}, {id: 2}],
            isFetching: false,
            lastUpdated: 1458969960969
        })
    });
});