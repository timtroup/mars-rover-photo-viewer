import photos from '../../src/reducers/photos-reducer';

describe('photos reducer', () => {

    it('should return the initial state', () => {
        expect(photos(undefined, {})).to.eql({
            photos: [],
            isFetching: false
        })
    });

    it('should return correct state when REQUEST_PHOTOS', () => {
        expect(photos({}, {
            type: 'REQUEST_PHOTOS',
            rover: 'curiosity'
        })).to.eql({
            isFetching: true,
        })
    });

    it('should return correct state when RECEIVE_PHOTOS', () => {
        expect(photos({}, {
            type: 'RECEIVE_PHOTOS',
            photos: [{id: 1}],
            receivedAt: 1458969960969
        })).to.eql({
            isFetching: false,
            photos: [{id: 1}],
            lastUpdated: 1458969960969
        })
    });
});