import {REQUEST_MANIFEST, RECEIVE_MANIFEST} from '../actions/manifest-action'

const manifest = (state = {
    isFetching: false,
    didInvalidate: false
}, action) => {
    switch (action.type) {
        case REQUEST_MANIFEST:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            };
        case RECEIVE_MANIFEST:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                photo_manifest: action.manifest.photo_manifest,
                lastUpdated: action.receivedAt
            };
        default:
            return state
    }
};

const manifestByRover = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_MANIFEST:
        case REQUEST_MANIFEST:
            return {
                ...state,
                [action.rover]: manifest(state[action.rover], action)
            };
        default:
            return state
    }
};

export default manifestByRover