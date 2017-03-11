import selectedCamera from '../../src/reducers/select-camera-reducer';

describe('selectedCamera reducer', () => {

    it('should return the initial state', () => {
        expect(selectedCamera(undefined, {})).to.eql('ALL')
    });

    it('should return correct state when ', () => {
        expect(selectedCamera('ALL', {
            type: 'SELECT_CAMERA',
            camera: 'RHAZ'
        })).to.eql('RHAZ')
    });
});