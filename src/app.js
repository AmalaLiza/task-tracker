"use strict";
var React = require("react");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var header_tsx_1 = require("../src/components/header/header.tsx");
var board_tsx_1 = require("../src/components/board/board.tsx");
var day_tracker_tsx_1 = require("../src/components/footer/day-tracker/day-tracker.tsx");
var actions_ts_1 = require("./actions.ts");
class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        return React.createElement("div", {"className": "tr-wrapper"}, React.createElement(header_tsx_1.default, null), React.createElement("div", {"className": "main-body"}, React.createElement("div", {"className": "width-container"}, React.createElement("div", {"className": "task-list clearfix"}, React.createElement(board_tsx_1.default, null)), React.createElement("div", null, React.createElement("a", {"href": "javascript:void(0)", "className": "primary-link"}, "ADD TASK")))), React.createElement("div", {"className": "footer"}, React.createElement(day_tracker_tsx_1.default, null)));
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