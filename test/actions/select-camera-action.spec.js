import {selectCamera} from '../../src/actions/select-camera-action';

describe('selectCamera', () => {

    it('should return an object with correct type and date', () => {
        expect(selectCamera('RHAZ')).to.eql({
            type: 'SELECT_CAMERA',
            camera: 'RHAZ'
        });
    });
});