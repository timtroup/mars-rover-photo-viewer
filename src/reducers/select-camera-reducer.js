import { SELECT_CAMERA } from '../actions/select-camera-action'

const selectedCamera = (state = '', action) => {
    switch (action.type) {
        case SELECT_CAMERA:
            return action.camera;
        default:
            return state
    }
};

export default selectedCamera