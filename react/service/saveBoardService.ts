import fetch from 'isomorphic-fetch';
import {saveBoard} from "../src/actions";

export function saveBoardService(data) {

    return dispatch => {

        return fetch('http://localhost:8080/write',{
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'data='+ JSON.stringify(data.toJS())
        })
            .then((response) => response.json())
            .catch(function(err) {
                console.log('Fetch Error', err);
            });
    };
}