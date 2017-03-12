import 'isomorphic-fetch';
import {API_KEY} from '../util/constants';

export const REQUEST_MANIFEST = 'REQUEST_MANIFEST';
export const RECEIVE_MANIFEST = 'RECEIVE_MANIFEST';

const ROOT_URL =`https://api.nasa.gov/mars-photos/api/v1/manifests`;

export const requestManifest = rover => ({
    type: REQUEST_MANIFEST,
    rover
});

export const receiveManifest = (rover, json) => ({
    type: RECEIVE_MANIFEST,
    rover,
    manifest: json,
    receivedAt: Date.now()
});

export const fetchManifest = rover => dispatch => {
    dispatch(requestManifest(rover));
    return fetch(`${ROOT_URL}/${rover}?api_key=${API_KEY}`)
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then(response => response.json())
        .then(json => dispatch(receiveManifest(rover, json)))
        .catch(function(error) {
            console.log(error);
            return dispatch(receiveManifest(rover, {photo_manifest: {}}))
        })
};