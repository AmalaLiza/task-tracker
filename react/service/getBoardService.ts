import fetch from 'isomorphic-fetch';
import {getBoard} from "../src/actions";

export function getBoardService() {

    return dispatch => {
        return fetch('http://localhost:3000/getBoard')
            .then((response) => response.json())
            .then(function(response) {
                let boardList = JSON.parse(JSON.parse(response.data));
                dispatch(getBoard(boardList));
            })
            .catch(function(err) {
                console.log('Fetch Error', err);
            });
    };

}