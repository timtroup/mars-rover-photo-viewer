import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {fetchPhotos, REQUEST_PHOTOS, RECEIVE_PHOTOS} from '../../src/actions/photos-action';
import nock from 'nock';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('photos actions', () => {

    let now = new Date();
    let clock;

    beforeEach(() => {
        clock = sinon.useFakeTimers(now.getTime());
    });

    afterEach(() => {
        nock.cleanAll();
        clock.restore();
    });

    it('creates RECEIVE_PHOTOS when fetching manifests has been done', () => {
        nock('https://api.nasa.gov/')
            .get('/mars-photos/api/v1/rovers/curiosity/photos')
            .query({
                earth_date: '2017-03-09',
                camera: 'RHAZ',
                api_key: 'DEMO_KEY'
            })
            .reply(200, { photos: [] });

        const expectedActions = [
            {
                type: REQUEST_PHOTOS,
                "rover": "curiosity"
            },
            {
                type: RECEIVE_PHOTOS,
                "receivedAt": now.getTime(),
                "photos": []
            }
        ];
        const store = mockStore({});

        return store.dispatch(fetchPhotos('curiosity', '2017-03-09', 'RHAZ'))
            .then(() => { // return of async actions
                expect(store.getActions()).to.eql(expectedActions)
            })
    });

    it('creates RECEIVE_PHOTOS when fetching manifests has been done', () => {
        nock('https://api.nasa.gov/')
            .get('/mars-photos/api/v1/rovers/curiosity/photos')
            .query({
                earth_date: '2017-03-09',
                api_key: 'DEMO_KEY'
            })
            .reply(200, { photos: [] });

        const expectedActions = [
            {
                type: REQUEST_PHOTOS,
                "rover": "curiosity"
            },
            {
                type: RECEIVE_PHOTOS,
                "receivedAt": now.getTime(),
                "photos": []
            }
        ];
        const store = mockStore({});

        return store.dispatch(fetchPhotos('curiosity', '2017-03-09', 'ALL'))
            .then(() => { // return of async actions
                expect(store.getActions()).to.eql(expectedActions)
            })
    });
});