export const REQUEST_MANIFEST = 'REQUEST_MANIFEST';
export const RECEIVE_MANIFEST = 'RECEIVE_MANIFEST';

const API_KEY = 'Y5T3wqwLAJUHWXyDlJtQGeK0anjuaye0QLtgTCyn';
const ROOT_URL =`http://api.nasa.gov/mars-photos/api/v1/manifests`;

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

export const fetchManifest = rover => {
    dispatch(requestManifest(rover))
    return fetch(`${ROOT_URL}/${rover}?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(json => dispatch(receiveManifest(rover, json)))
};