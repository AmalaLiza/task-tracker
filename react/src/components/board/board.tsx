import './board.scss';
import * as React from "react";
import Task from '../task/task.tsx';
import {BoardType} from "../../models/BoardType";
import * as Immutable from "immutable";
import {TaskType} from "../../models/TaskType";

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

    onAddTask(title:string, boardIndex:number) {
        this.props.onAddTask(title, boardIndex);
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
                <a href='javascript:void(0)' className="primary-link add-task-link"
                   onClick={() => {this.onAddTask("Amala", this.props.index)}}>+ Add Task
                </a>
                <input style={{display:'none'}}/>
            </div>
        </div>
    }
}

