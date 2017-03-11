import manifestByRover from '../../src/reducers/manifest-reducer';

describe('manifest reducer', () => {

    it('should return the initial state', () => {
        expect(manifestByRover(undefined, {})).to.eql({})
    });

    it('should return correct state when ', () => {
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
});