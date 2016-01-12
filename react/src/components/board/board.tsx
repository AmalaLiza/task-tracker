import './board.scss';
import * as React from "react";
import Task from '../task/task.tsx';
import {BoardType} from "../../models/BoardType";
import * as Immutable from "immutable";
import {TaskType} from "../../models/TaskType";
import {EventEmitter} from "events";

interface BoardProps{
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
}

export default class Board extends React.Component<BoardProps, any> {

    constructor() {
        super();
    }

    onAddTask(event, boardIndex:number) {
        console.log(event.target.value)
        this.props.onAddTask(event.target.val, boardIndex);
    }

    render() {
        let taskList:TaskType[] = this.props.data.get("taskList");
        let taskListElements = taskList
            .map((task:TaskType, index:number) => (
                <Task
                    key={index}
                    index={index}
                    id={task.id}
                    task={task}
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
                    <input style={{display:'block'}} className="fleft task-footer__add-task__input"/>
                    <button className="fleft primary-button task-footer__add-task__button"
                            onClick={(e) => {this.onAddTask(e, this.props.index)}}>+ Add</button>
                </div>
                <a href="javascript:void(0)" className="primary-link add-task-link" style={{display:"none"}}>+ Add Task</a>
            </div>
        </div>
    }
}

