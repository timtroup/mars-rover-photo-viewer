import { SELECT_ROVER } from '../actions/select-rover-action'

const selectedRover = (state = 'curiosity', action) => {
    switch (action.type) {
        case SELECT_ROVER:
            return action.rover;
        default:
            return state
    }
};

export default selectedRover