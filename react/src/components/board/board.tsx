import './board.scss';
import * as React from "react";
import Task from '../task/task.tsx';
import {BoardType} from "../../models/BoardType";
import * as Immutable from "immutable";
import {TaskType} from "../../models/TaskType";

interface BoardProps {
    key : number;
    id : number;
    index: number;
    data : BoardType;
    onTaskCompletion : Function;
    onTaskPlay : Function;
    onPauseTask : Function;
    onExpandTask : Function;
    onEditBoardTitle : Function;
    onEditTaskTitle : Function;
    onAddTask : Function;
    setCurrentTask :Function;
}

export default class Board extends React.Component<BoardProps, any> {

    constructor() {
        super();
    }

    onAddTask(event, boardIndex:number) {
        if (event.keyCode === 13) {
            this.props.onAddTask(event.target.value, boardIndex);
            event.target.value = '';
        }
    }

    render() {
        let taskList:TaskType[] = this.props.data.get("taskList");
        let taskListElements = taskList
            .map((task:TaskType, index:number) => (
                <Task
                    key={index}
                    index={index}
                    boardId={this.props.index}
                    task={task}
                    onTaskComplete={this.props.onTaskCompletion}
                    setCurrentTask={this.props.setCurrentTask}
                />
            ));

        return <div className="task-list__item fleft">
            <div className="task-header-wrapper">
                <h2 className="task-header align-center">{this.props.data.get('title')}
                    <span className="task-no">{"("+taskListElements.size+")"}</span>
                </h2>
            </div>
            <div className="task-body">
                <ul className="task-body-list">
                    {taskListElements}
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

