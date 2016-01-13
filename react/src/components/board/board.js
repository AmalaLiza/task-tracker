require('./board.scss');
var React = require("react");
var task_tsx_1 = require('../task/task.tsx');
class Board extends React.Component {
    constructor() {
        super();
    }
    onAddTask(event, boardIndex) {
        if (event.keyCode === 13) {
            this.props.onAddTask(event.target.value, boardIndex);
            event.target.value = '';
        }
    }
    render() {
        let taskList = this.props.data.get("taskList");
        let taskListElements = taskList
            .map((task, index) => (React.createElement(task_tsx_1.default, {"key": index, "index": index, "boardId": this.props.index, "task": task, "onTaskComplete": this.props.onTaskCompletion, "setCurrentTask": this.props.setCurrentTask})));
        return React.createElement("div", {"className": "task-list__item fleft"}, React.createElement("div", {"className": "task-header-wrapper"}, React.createElement("h2", {"className": "task-header align-center"}, this.props.data.get('title'), React.createElement("span", {"className": "task-no"}, "(" + taskListElements.size + ")"))), React.createElement("div", {"className": "task-body"}, React.createElement("ul", {"className": "task-body-list"}, taskListElements)), React.createElement("div", {"className": "task-footer"}, React.createElement("div", {"className": "task-footer__add-task clearfix"}, React.createElement("input", {"placeholder": "Add Task", "className": "task-footer__add-task__input", "onKeyDown": (event) => { this.onAddTask(event, this.props.index); }})), React.createElement("a", {"href": "javascript:void(0)", "className": "primary-link add-task-link", "style": { display: "none" }}, "+ Add Task")));
    }
}
exports.Board = Board;
//# sourceMappingURL=board.js.map