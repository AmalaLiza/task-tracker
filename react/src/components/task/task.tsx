import * as React from "react";
import './task.scss';
import {TaskType} from "../../models/TaskType";

interface TaskProps {
    key:number;
    index: number;
    boardId:number;
    task: TaskType;
    onTaskComplete:Function;
}

export default class Task extends React.Component<TaskProps, any> {

    render() {
        return <li className="task-body-list__item clearfix">
            <label className="task-body-list__item__label fleft">
                <input type="checkbox"
                       checked={this.props.task.get('completed')}
                       onChange={(e) => this.props.onTaskComplete(this.props.boardId, this.props.index)}/>
                <span className="task-body-list__item__label__text">{this.props.task.get('title')}</span>
            </label>
            <a href="javascript:void(0)" className="play-ico fright"></a>
            <span className="task-time-left fright">{this.props.task.get('estimatedTime')}</span>
        </li>
    }

}




