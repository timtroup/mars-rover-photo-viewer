import { SELECT_DATE } from '../actions/select-date-action'

const selectedDate = (state = '', action) => {
    switch (action.type) {
        case SELECT_DATE:
            return action.date;
        default:
            return state
    }
};

export default selectedDate