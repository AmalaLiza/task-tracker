var redux_1 = require('redux');
var reducers_ts_1 = require('./reducers.ts');
var redux_logger_1 = require('redux-logger');
var redux_thunk_1 = require('redux-thunk');
const logger = redux_logger_1.default({
    collapsed: true
});
const timeoutScheduler = store => next => action => {
    if (!action.meta || !action.meta.delay) {
        console.log("Haiii", action);
        return next(action);
    }
    console.log("Haiii out", action);
    let timeoutId = setTimeout(() => next(action), action.meta.delay);
    return function cancel() {
        clearTimeout(timeoutId);
    };
};
const createStoreWithMiddleware = redux_1.applyMiddleware(logger, redux_thunk_1.default, timeoutScheduler)(redux_1.createStore);
function configureStore() {
    return createStoreWithMiddleware(reducers_ts_1.rootReducer);
}
exports.default = configureStore;
//# sourceMappingURL=store.js.map