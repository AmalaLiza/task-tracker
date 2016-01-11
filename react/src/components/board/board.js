require('./board.scss');
require('./main-body.scss');
var React = require("react");
var task_tsx_1 = require('../task/task.tsx');
class Board extends React.Component {
    constructor() {
        super();
    }
    onAddTask(value, boardIndex) {
        this.props.onAddTask(value, boardIndex);
    }
    render() {
        let taskList = this.props.data.get("taskList");
        let taskListElements = taskList
            .map((task, index) => (React.createElement(task_tsx_1.default, {"key": index, "index": index, "id": task.id, "data": task})));
        return React.createElement("div", {"className": "task-list__item fleft"}, React.createElement("div", {"className": "task-header-wrapper"}, React.createElement("h2", {"className": "task-header align-center"}, this.props.data.get('title'), React.createElement("span", {"className": "task-no"}, "(" + taskListElements.size + ")"))), React.createElement("div", {"className": "task-body"}, React.createElement("ul", {"className": "task-body-list"}, taskListElements)), React.createElement("div", {"className": "task-footer"}, React.createElement("a", {"href": 'javascript:void(0)', "className": "primary-link add-task-link", "onClick": () => { this.onAddTask("Amala", this.props.index); }}, "+ Add Task"), React.createElement("input", {"style": { display: 'none' }})));
    }
}
exports.Board = Board;
//# sourceMappingURL=board.js.map