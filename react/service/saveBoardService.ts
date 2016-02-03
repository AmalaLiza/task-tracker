import fetch from 'isomorphic-fetch';
import {saveBoard} from "../src/actions";

export function saveBoardService(data) {
    return dispatch => {

        return fetch('http://localhost:3000/write',{
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'data='+ JSON.stringify(data)
        })
            .then((response) => response.json())
            .then(() => dispatch(saveBoard()))
            .catch(function(err) {
                console.log('Fetch Error', err);
            });
    };
}