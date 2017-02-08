import { combineReducers } from 'redux';
import manifestByRover from './manifest-reducer';
import selectedRover from './select-rover-reducer';
import selectedDate from './select-date-reducer';
import selectedCamera from './select-camera-reducer';

const rootReducer = combineReducers({
    manifestByRover,
    selectedRover,
    selectedDate,
    selectedCamera
});

export default rootReducer;
