"use strict";
var React = require("react");
var react_redux_1 = require("react-redux");
var redux_1 = require("redux");
var header_tsx_1 = require("../src/components/header/header.tsx");
var board_tsx_1 = require("../src/components/board/board.tsx");
var add_board_tsx_1 = require("../src/components/add-board/add-board.tsx");
var task_tracker_tsx_1 = require("../src/components/task-tracker/task-tracker.tsx");
var actions_ts_1 = require("./actions.ts");
var day_tracker_tsx_1 = require("./components/day-tracker/day-tracker.tsx");
var description_tsx_1 = require("./components/description/description.tsx");
require('./stylesheets/base.scss');
require('./stylesheets/common.scss');
require('./stylesheets/layout.scss');
class App extends React.Component {
    constructor() {
        super();
    }
    render() {
        let { data, actions } = this.props;
        let boardList = data.get("boardList");
        let boardListElements = boardList
            .map((board, index) => (React.createElement(board_tsx_1.default, {"key": index, "id": board.get('id'), "index": index, "data": board, "onTaskCompletion": actions.taskCompleted, "onTaskPlay": actions.playTask, "onPauseTask": actions.pauseTask, "onExpandTask": actions.expandTask, "onEditBoardTitle": actions.editBoardTitle, "onEditTaskTitle": actions.editTaskTitle, "onAddTask": actions.addTask})));
        return React.createElement("div", {"className": "tr-wrapper"}, React.createElement(header_tsx_1.default, null), React.createElement("div", {"className": "main-body"}, React.createElement("div", {"className": "width-container"}, React.createElement("div", {"className": "task-list clearfix"}, boardListElements, React.createElement(add_board_tsx_1.default, {"handleClick": actions.addBoard})))), React.createElement("div", {"className": "footer"}, React.createElement(task_tracker_tsx_1.default, null), React.createElement(day_tracker_tsx_1.default, null)), React.createElement(description_tsx_1.default, null));
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