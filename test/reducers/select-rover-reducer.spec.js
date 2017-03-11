import selectRover from '../../src/reducers/select-rover-reducer';

describe('selectRover reducer', () => {

    it('should return the initial state', () => {
        expect(selectRover(undefined, {})).to.eql('curiosity')
    });

    it('should return correct state when ', () => {
        expect(selectRover('curiosity', {
            type: 'SELECT_ROVER',
            rover: 'spirit'
        })).to.eql('spirit')
    });
});