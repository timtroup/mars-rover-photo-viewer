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

    let url = `${ROOT_URL}/${rover}/photos?earth_date=${sol}`;
    if(camera !== 'ALL') {
        url = url + `&camera=${camera}`;
    }
    url = url + `&api_key=${API_KEY}`;

    return fetch(url)
        .then(response => response.json())
        .then(json => dispatch(receivePhotos(json)))
};