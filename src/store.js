/// <reference path="../typings/redux/redux.d.ts" />
var redux_1 = require('redux');
const finalCreateStore = redux_1.compose()(redux_1.createStore);
function configureStore() {
    return finalCreateStore(rootReducer);
}
exports.default = configureStore;
//# sourceMappingURL=store.js.map