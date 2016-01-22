import * as React from "react";
import * as Immutable from "immutable";
import Task from '../task/task.tsx';
import BoardType from "../../models/BoardType.ts";
import './board.scss';
import TaskType from "../../models/TaskType.ts";

interface BoardProps {
    key:number;
    index:number;
    data:BoardType;
    filterBy:string;
    onTaskCompletion:Function;
    renameBoard:Function;
    onEditTaskTitle:Function;
    onAddTask:Function;
    setDescriptiveTask:Function;
    onPlayOrPauseTask:Function;
    onDeleteBoard:Function;
}

export default class Board extends React.Component<BoardProps, any> {

    constructor() {
        super();
        this.state = {
            showCompletedList: false,
            showMoreOptions: false,
            showRenameInput: false
        };
    }

    onAddTask(event, boardIndex:number) {
        if (event.keyCode === 13) {
            this.props.onAddTask(event.target.value, boardIndex);
            event.target.value = '';
        }
    }

    renameBoard(event, boardIndex:number) {
        console.log("input onchange");
        if (event.keyCode === 13) {
            this.props.renameBoard(event.target.value, boardIndex);
            event.target.value = '';
            this.setState({showRenameInput: false});
        }
    }

    render() {

        let taskList:Immutable.List<any> = this.props.data.get("taskList");
        let taskListElements = taskList
            .filter((task, index) => (task.get('completed') == false &&
            task.get('title').toLowerCase().indexOf(this.props.filterBy.toLowerCase()) > -1));
        taskListElements = taskListElements.map((task, index) => (
            <Task
                key={index}
                index={index}
                taskId={task.get('id')}
                boardIndex={this.props.index}
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
                index={index}
                taskId={task.get('id')}
                boardIndex={this.props.index}
                task={task}
                onTaskComplete={this.props.onTaskCompletion}
                setDescriptiveTask={this.props.setDescriptiveTask}
            />
        ));

        return <div className="task-list__item fleft">
            <div className="task-header-wrapper">
                <h2 className="task-header align-center"
                    style={this.state.showRenameInput?{display: "none"}:{display: "block"}}
                >{this.props.data.get('title')}
                    <span className="task-no">({taskListElements.size})</span>
                </h2>
                <input type="text"
                       className="task-header-input"
                       placeholder="Enter Board Name"
                       style={this.state.showRenameInput?{display: "block"}:{display: "none"}}
                       onKeyDown={(event) => {this.renameBoard(event, this.props.index)}}
                       defaultValue={this.props.data.get('title')}/>
                <a href="javascript:void(0)"
                   className="flaticon-show8 more-ico"
                   onClick={ () => {this.setState({showMoreOptions: !this.state.showMoreOptions})}}>
                </a>
                <ul className="more-options"
                    style={this.state.showMoreOptions?{display: "block"}:{display: "none"}}>
                    <li>Search</li>
                    <li onClick={() => {
                        this.setState({showMoreOptions: !this.state.showMoreOptions});
                        this.setState({showRenameInput: true});
                    }}>Rename</li>
                    <li onClick={() => {
                        this.props.onDeleteBoard(this.props.index);
                        this.setState({showMoreOptions: !this.state.showMoreOptions});
                    }}>Delete Board</li>
                </ul>
            </div>
            <div className="task-body">
                <ul className="task-body-list">
                    {taskListElements}
                </ul>
                <div className="task-body__sub-head clearfix"
                     style={ completedTaskListElements.size?{display: "block"}:{display: "none"} }>
                    <span className="fleft">COMPLETED TASKS({completedTaskListElements.size})</span>
                    <a href="javascript:void(0)"
                       className="fright primary-link bold-text"
                       onClick={ () => {this.setState({showCompletedList: !this.state.showCompletedList})}}>
                        {this.state.showCompletedList?"Hide":"Show"}
                    </a>
                </div>
                <ul className="task-body-list strike-list"
                    style={this.state.showCompletedList?{display: "block"}:{display: "none"}}>
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

