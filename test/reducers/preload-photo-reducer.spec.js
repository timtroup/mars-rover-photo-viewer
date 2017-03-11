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

    it('should return correct state when RECEIVE_PRELOAD_PHOTOS', () => {
        expect(photoGalleryData(
            {
                data: [{id: 1}],
                isFetching: false
            },
            {
                type: 'DELETE_PHOTOS'
            }
        )).to.eql({
            data: [],
            isFetching: false
        })
    });

    it('should return correct state when RECEIVE_COLORIZE', () => {
        let photo = {
            id: 1,
            lightboxImage: {}
        };
        expect(photoGalleryData(
            {
                data: [photo],
                isFetching: false
            },
            {
                type: 'RECEIVE_COLORIZE',
                photo: photo,
                base64Image: 'base64Image',
                receivedAt: 1458969960969
            }
        )).to.eql({
            data: [{
                "id": 1,
                "lightboxImage": {
                    "src": "data:image/jpeg;base64,base64Image"
                },
                "src": "data:image/jpeg;base64,base64Image"
            }
        ],
            isFetching: false
        })
    });
});