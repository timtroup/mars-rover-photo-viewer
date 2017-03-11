import {selectDate} from '../../src/actions/select-date-action';

describe('selectDate', () => {

    it('should return an object with correct type and date', () => {
        expect(selectDate('date')).to.eql({
            type: 'SELECT_DATE',
            date: 'date'
        });
    });
});