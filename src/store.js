/// <reference path="../typings/redux/redux.d.ts" />
var redux_1 = require('redux');
var reducers_ts_1 = require('./reducers.ts');
const finalCreateStore = redux_1.compose()(redux_1.createStore);
function configureStore() {
    return finalCreateStore(reducers_ts_1.rootReducer);
}
exports.default = configureStore;
//# sourceMappingURL=store.js.map