import store from "../store.ts";

(function() {

    let dispatchActions = (actions) => {
        for (let i in actions.actionHistory) {
            store.dispatch(JSON.parse(actions.actionHistory[i]));
        }
    }

    let copy = () => {
        return localStorage.history;
    }

    window.tracker = {
        copy,
        dispatchActions
    };
})();