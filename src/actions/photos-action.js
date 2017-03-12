import 'isomorphic-fetch';
import {API_KEY} from '../util/constants';

export const REQUEST_PHOTOS = 'REQUEST_PHOTOS';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

const ROOT_URL =`https://api.nasa.gov/mars-photos/api/v1/rovers`;

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
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then(response => response.json())
        .then(json => dispatch(receivePhotos(json)))
        .catch(function(error) {
            return dispatch(receivePhotos({photos:[]}));
        })
};