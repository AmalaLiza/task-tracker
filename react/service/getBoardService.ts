import fetch from 'isomorphic-fetch';
import {getBoard} from "../src/actions";

export function getBoardService() {
    return dispatch => {
        return fetch('http://localhost:8080/addBoard')
            .then((response) => response.json())
            .then(function(response) {
                dispatch(addBoard(response.data));
            })
            .catch(function(err) {
                console.log('Fetch Error', err);
            });
    };
}