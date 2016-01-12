var redux_1 = require('redux');
var reducers_ts_1 = require('./reducers.ts');
var redux_logger_1 = require('redux-logger');
var redux_thunk_1 = require('redux-thunk');
const logger = redux_logger_1.default({
    collapsed: true
});
const createStoreWithMiddleware = redux_1.applyMiddleware(logger, redux_thunk_1.default)(redux_1.createStore);
function configureStore() {
    return createStoreWithMiddleware(reducers_ts_1.rootReducer);
}
exports.default = configureStore;
//# sourceMappingURL=store.js.map