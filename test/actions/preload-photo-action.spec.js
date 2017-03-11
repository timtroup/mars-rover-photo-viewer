import {deletePhotos, DELETE_PHOTOS} from '../../src/actions/preload-photo-action';

describe('deletePhotos', () => {

    it('should return an object with correct type and date', () => {
        expect(deletePhotos()).to.eql({
            type: DELETE_PHOTOS
        });
    });
});