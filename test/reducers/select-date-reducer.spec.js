import selectedDate from '../../src/reducers/select-date-reducer';
import moment from 'moment';

describe('selectedDate reducer', () => {

    let now = new Date();
    let clock;

    beforeEach(() => {
        clock = sinon.useFakeTimers(now.getTime());
    });

    afterEach(() => {
        clock.restore();
    });

    it('should return the initial state', () => {
        expect(selectedDate(undefined, {})).to.eql(moment().subtract(2, "days").format('YYYY-MM-DD'))
    });

    it('should return correct state when ', () => {
        expect(selectedDate(moment().subtract(2, "days").format('YYYY-MM-DD'), {
            type: 'SELECT_DATE',
            date: '2013-01-01'
        })).to.eql('2013-01-01')
    });
});