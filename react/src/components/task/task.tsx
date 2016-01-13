import * as React from "react";
import './task.scss';
import {TaskType} from "../../models/TaskType";

import Description from "../description/description.tsx";

interface TaskProps {
    key:number;
    index: number;
    boardId:number;
    task: TaskType;
    onTaskComplete:Function;
    setCurrentTask:Function;
}

export default class Task extends React.Component<TaskProps, any> {

    constructor(props, context){
        super(props, context);
        this.handleClick = this.handleClick.bind(this);
        this.showDesc = this.showDesc.bind(this);
    }

    handleClick(){
        this.props.onTaskComplete(this.props.boardId, this.props.index);
    }

    showDesc(){
        this.props.setCurrentTask(this.props.boardId, this.props.index);
        document.getElementsByClassName("right-fixed-panel")[0].style.display = 'block';
        document.getElementById(this.props.boardId+'_'+this.props.index).className = "task-body-list__item clearfix active";
    }

    render() {
        return <li className="task-body-list__item clearfix" id={this.props.boardId+'_'+this.props.index}>
            <input type="checkbox"
                   checked={this.props.task.get('completed')}
                   onChange={this.handleClick}/>
            <label className="task-body-list__item__label fleft"
                   onClick={this.showDesc}>
                <span className="task-body-list__item__label__text">{this.props.task.get('title')}</span>
            </label>
            <a href="javascript:void(0)" className="play-ico fright"></a>
            <span className="task-time-left fright">{this.props.task.get('estimatedTime')}</span>
        </li>
    }

}




