import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {fetchManifest, REQUEST_MANIFEST, RECEIVE_MANIFEST} from '../../src/actions/manifest-action';
import nock from 'nock';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('manifest actions', () => {

    let now = new Date();
    let clock;

    beforeEach(() => {
        clock = sinon.useFakeTimers(now.getTime());
    });

    afterEach(() => {
        nock.cleanAll();
        clock.restore();
    });

    it('creates RECEIVE_MANIFEST when fetching manifests has been done', () => {
        nock('https://api.nasa.gov')
            .get('/mars-photos/api/v1/manifests/curiosity')
            .query({
                api_key: 'Y5T3wqwLAJUHWXyDlJtQGeK0anjuaye0QLtgTCyn'
            })
            .reply(200, { photo_manifest: {} });

        const expectedActions = [
            {
                type: REQUEST_MANIFEST,
                "rover": "curiosity"
            },
            {
                type: RECEIVE_MANIFEST,
                rover: "curiosity",
                "receivedAt": now.getTime(),
                "manifest": {
                    photo_manifest: {}
                }
            }
        ];
        const store = mockStore({});

        return store.dispatch(fetchManifest('curiosity'))
            .then(() => { // return of async actions
                expect(store.getActions()).to.eql(expectedActions)
            })
    })
});