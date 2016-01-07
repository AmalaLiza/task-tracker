"use strict";
var React = require("react");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var actions_ts_1 = require("./actions.ts");
class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return React.createElement("h1", null, " Task Tracker");
    }
}
exports.App = App;
function mapStateToProps(state) {
    return { data: state };
}
function mapDispatchToProps(dispatch) {
    return { actions: redux_1.bindActionCreators(actions_ts_1.default, dispatch) };
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);
//# sourceMappingURL=app.js.map