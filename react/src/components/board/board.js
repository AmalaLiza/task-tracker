require('./board.scss');
var React = require("react");
var task_tsx_1 = require('../task/task.tsx');
class Board extends React.Component {
    constructor() {
        super();
    }
    onAddTask(event, boardIndex) {
        console.log(event.target.value);
        this.props.onAddTask(event.target.val, boardIndex);
    }
    render() {
        let taskList = this.props.data.get("taskList");
        let taskListElements = taskList
            .map((task, index) => (React.createElement(task_tsx_1.default, {"key": index, "index": index, "id": task.id, "task": task})));
        return React.createElement("div", {"className": "task-list__item fleft"}, React.createElement("div", {"className": "task-header-wrapper"}, React.createElement("h2", {"className": "task-header align-center"}, this.props.data.get('title'), React.createElement("span", {"className": "task-no"}, "(" + taskListElements.size + ")"))), React.createElement("div", {"className": "task-body"}, React.createElement("ul", {"className": "task-body-list"}, taskListElements)), React.createElement("div", {"className": "task-footer"}, React.createElement("div", {"className": "task-footer__add-task clearfix"}, React.createElement("input", {"style": { display: 'block' }, "className": "fleft task-footer__add-task__input"}), React.createElement("button", {"className": "fleft primary-button task-footer__add-task__button", "onClick": (e) => { this.onAddTask(e, this.props.index); }}, "+ Add"))));
    }
}
exports.Board = Board;
//# sourceMappingURL=board.js.map