export const REQUEST_PHOTOS = 'REQUEST_PHOTOS';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

const API_KEY = 'Y5T3wqwLAJUHWXyDlJtQGeK0anjuaye0QLtgTCyn';
const ROOT_URL =`http://api.nasa.gov/mars-photos/api/v1/rovers`;

export const requestPhotos = rover => ({
    type: REQUEST_PHOTOS,
    rover
});

export const receivePhotos = (json) => ({
    type: RECEIVE_PHOTOS,
    photos: json.photos,
    receivedAt: Date.now()
});

export const fetchPhotos = (rover, sol, camera) => dispatch => {
    dispatch(requestPhotos(rover));
    return fetch(`${ROOT_URL}/${rover}/photos?sol=${sol}&camera=${camera}&api_key=${API_KEY}`)
        .then(response => response.json())
        .then(json => dispatch(receivePhotos(json)))
};