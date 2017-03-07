export const REQUEST_COLORIZE = 'REQUEST_COLORIZE';
export const RECEIVE_COLORIZE = 'RECEIVE_COLORIZE';

const ROOT_URL =`http://localhost:8080/colorizeImageFromUrl`;

export const requestColorize = rover => ({
    type: REQUEST_COLORIZE,
    rover
});

export const receiveColorize = (photo, json) => ({
    type: RECEIVE_COLORIZE,
    photo,
    base64Image: json,
    receivedAt: Date.now()
});

export const fetchColorized = photo => dispatch => {
    dispatch(requestColorize(photo.src));
    return fetch(ROOT_URL,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({data: photo.src})
        })
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then(response => response.text())
        .then(json => dispatch(receiveColorize(photo, json)))
};