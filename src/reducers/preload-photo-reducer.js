import {REQUEST_PRELOAD_PHOTOS, RECEIVE_PRELOAD_PHOTOS} from '../actions/preload-photo-action'

const photoGalleryData = (state = {
    data: [],
    isFetching: false
}, action) => {
    switch (action.type) {
        case REQUEST_PRELOAD_PHOTOS:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_PRELOAD_PHOTOS:
            return {
                ...state,
                isFetching: false,
                data: action.photos,
                lastUpdated: action.receivedAt
            };
        default:
            return state
    }
};

export default photoGalleryData