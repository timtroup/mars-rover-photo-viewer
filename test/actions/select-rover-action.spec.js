import React from 'react';
import {selectRover} from '../../src/actions/select-rover-action';

describe('selectRover', () => {

    it('should return an object with correct type and rover', () => {
        expect(selectRover('curiosity')).to.eql({
            type: 'SELECT_ROVER',
            rover: 'curiosity'
        });
    });
});