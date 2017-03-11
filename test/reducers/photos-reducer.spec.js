import photos from '../../src/reducers/photos-reducer';

describe('photos reducer', () => {

    it('should return the initial state', () => {
        expect(photos(undefined, {})).to.eql({
            photos: [],
            isFetching: false
        })
    });

    it('should return correct state when ', () => {
        expect(photos({}, {
            type: 'REQUEST_PHOTOS',
            rover: 'curiosity'
        })).to.eql({
            isFetching: true,
        })
    });
});