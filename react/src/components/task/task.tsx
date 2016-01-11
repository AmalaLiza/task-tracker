import * as React from "react";
import {TaskType} from "../../models/TaskType";

interface TaskProps {
    key:number;
    index: number;
    id:number;
    task: TaskType;
}

export default class Task extends React.Component<TaskProps, any> {

    render() {
        return <li className="task-body-list__item clearfix">
            <label className="task-body-list__item__label fleft">
                <input type="checkbox"/>
                <span className="task-body-list__item__label__text">{this.props.task.get('title')}</span>
            </label>
            <a href="javascript:void(0)" className="play-ico fright display-none"></a>
            <span className="task-time-left fright">{this.props.task.get('estimatedTime')}</span>
        </li>
    }

}




