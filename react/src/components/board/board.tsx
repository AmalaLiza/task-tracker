import './board.scss';
import * as React from "react";
import Task from '../task/task.tsx';
import BoardType from "../../models/BoardType";
import * as Immutable from "immutable";
import TaskType from "../../models/TaskType";

interface BoardProps {
    key:number;
    id:number;
    index:number;
    data:BoardType;
    filterBy:string;
    onTaskCompletion:Function;
    onEditBoardTitle:Function;
    onEditTaskTitle:Function;
    onAddTask:Function;
    setDescriptiveTask:Function;
    onPlayOrPauseTask:Function;
}

export default class Board extends React.Component<BoardProps, any> {

    constructor() {
        super();
        this.state = {};
        this.state.toggleTaskList = true;
    }

    onAddTask(event, boardIndex:number) {
        if (event.keyCode === 13) {
            this.props.onAddTask(event.target.value, boardIndex);
            event.target.value = '';
        }
    }

    hideCompletedTaskList() {
        this.setState({toggleTaskList: !this.state.toggleTaskList});
    }

    render() {

        let taskList:Immutable.List<TaskType> = this.props.data.get("taskList");
        let taskListElements = taskList
            .filter((task, index) => (task.get('completed') == false && task.get('title').toLowerCase().indexOf(this.props.filterBy.toLowerCase()) > -1));
        taskListElements = taskListElements.map((task, index) => (
            <Task
                key={index}
                index={task.get('id')}
                boardId={this.props.index}
                task={task}
                onTaskComplete={this.props.onTaskCompletion}
                setDescriptiveTask={this.props.setDescriptiveTask}
                onPlayOrPauseTask={this.props.onPlayOrPauseTask}
            />
        ));
        let completedTaskListElements = taskList
            .filter((task, index) => (task.get('completed') == true && task.get('title').toLowerCase().indexOf(this.props.filterBy.toLowerCase()) > -1));
        completedTaskListElements = completedTaskListElements.map((task, index) => (
            <Task
                key={index}
                index={task.get('id')}
                boardId={this.props.id}
                task={task}
                onTaskComplete={this.props.onTaskCompletion}
                setDescriptiveTask={this.props.setDescriptiveTask}
            />
        ));

        return <div className="task-list__item fleft">
            <div className="task-header-wrapper">
                <h2 className="task-header align-center">{this.props.data.get('title')}
                    <span className="task-no">({taskListElements.size})</span>
                </h2>
                <a href="javascript:void(0)" className="flaticon-show8 more-ico">
                </a>
                <ul className="more-options" style={{display:"none"}}>
                    <li>Search & Filter</li>
                    <li>Rename</li>
                    <li>Delete Board</li>
                </ul>
            </div>
            <div className="task-body">
                <ul className="task-body-list">
                    {taskListElements}
                </ul>
                <div className="task-body__sub-head clearfix"
                     style={completedTaskListElements.size?{display: "block"}:{display: "none"}}>
                    <span className="fleft">COMPLETED TASKS({completedTaskListElements.size})</span>
                    <a href="javascript:void(0)"
                       className="fright primary-link bold-text"
                       onClick={()=>{this.hideCompletedTaskList()}}>{this.state.toggleTaskList?"Hide":"Show"}
                    </a>
                </div>
                <ul className="task-body-list strike-list"
                    style={this.state.toggleTaskList?{display: "block"}:{display: "none"}}>
                    {completedTaskListElements}
                </ul>
            </div>
            <div className="task-footer">
                <div className="task-footer__add-task clearfix">
                    <input placeholder="Add Task" className="task-footer__add-task__input"
                           onKeyDown={(event) => {this.onAddTask(event, this.props.index)}}/>
                </div>
                <a href="javascript:void(0)" className="primary-link add-task-link" style={{display:"none"}}>
                    + Add Task
                </a>
            </div>
        </div>
    }
}

