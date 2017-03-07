import {
    REQUEST_PRELOAD_PHOTOS,
    RECEIVE_PRELOAD_PHOTOS,
    DELETE_PHOTOS
} from '../actions/preload-photo-action'
import {
    RECEIVE_COLORIZE
} from '../actions/colorize-action'

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
                data: [...state.data, ...action.photos],
                lastUpdated: action.receivedAt
            };
        case DELETE_PHOTOS:
            return {
                ...state,
                data: []
            };
        case RECEIVE_COLORIZE:
            const index = state.data.indexOf(action.photo);
            action.photo.src = 'data:image/jpeg;base64,' + action.base64Image;
            action.photo.lightboxImage.src = 'data:image/jpeg;base64,' + action.base64Image;
            return {
                ...state,
                data: [
                    ...state.data.slice(0, index),
                    Object.assign({}, state.data[index], action.photo),
                    ...state.data.slice(index + 1)
                ]
            };
        default:
            return state
    }
};

export default photoGalleryData