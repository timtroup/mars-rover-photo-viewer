import manifestByRover from '../../src/reducers/manifest-reducer';

describe('manifest reducer', () => {

    let now = new Date();
    let clock;

    beforeEach(() => {
        clock = sinon.useFakeTimers(now.getTime());
    });

    afterEach(() => {
        clock.restore();
    });

    it('should return the initial state', () => {
        expect(manifestByRover(undefined, {})).to.eql({})
    });

    it('should return correct state when REQUEST_MANIFEST', () => {
        expect(manifestByRover({}, {
            type: 'REQUEST_MANIFEST',
            rover: 'curiosity'
        })).to.eql({
                curiosity: {
                isFetching: true,
                didInvalidate: false
            }
        })
    });

    it('should return correct state when RECEIVE_MANIFEST', () => {
        expect(manifestByRover({}, {
            type: 'RECEIVE_MANIFEST',
            rover: 'curiosity',
            manifest: {photo_manifest: {}},
            receivedAt: now
        })).to.eql({
            curiosity: {
                isFetching: false,
                didInvalidate: false,
                photo_manifest: {},
                lastUpdated: now
            }
        })
    });
});