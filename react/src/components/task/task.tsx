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
    setDescriptiveTask:Function;
    onPlayTask?:Function;
    onPauseTask?:Function;
}

export default class Task extends React.Component<TaskProps, any> {

    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.state.isPlaying = true;
        this.onTaskComplete = this.onTaskComplete.bind(this);
        this.showDesc = this.showDesc.bind(this);
        this.playAndPauseTask = this.playAndPauseTask.bind(this);
    }

    onTaskComplete() {
        this.props.onTaskComplete(this.props.boardId, this.props.index);
    }

    playAndPauseTask() {
        this.setState({isPlaying: !this.state.isPlaying});
        this.state.isPlaying? this.props.onPlayTask(this.props.boardId, this.props.index): this.props.onPauseTask(this.props.boardId, this.props.index);
        this.props.setCurrentTask(this.props.boardId, this.props.index, this.state.isPlaying);
        document.getElementById("task_tracker").style.display = 'block';
    }

    showDesc() {
        this.props.setDescriptiveTask(this.props.boardId, this.props.index);
        document.getElementsByClassName("right-fixed-panel")[0].style.display = 'block';
        document.getElementById(this.props.boardId + '_' + this.props.index).className = "task-body-list__item clearfix active";
    }

    render() {
        return <li className="task-body-list__item clearfix" id={this.props.boardId+'_'+this.props.index}>
            <input type="checkbox"
                   checked={this.props.task.get('completed')}
                   onChange={this.onTaskComplete}
                   className="fleft task-body-list__item__checkbox"
            />
            <label className="task-body-list__item__label fleft"
                   onClick={this.showDesc}>
                <span className="task-body-list__item__label__text">{this.props.task.get('title')}</span>
            </label>
            <a href="javascript:void(0)"
               id={this.props.boardId+'__'+this.props.index}
               className={this.state.isPlaying? "play-ico flaticon-play128 fright" : 'play-ico flaticon-pause52 fright'}
               onClick={() => {this.playAndPauseTask()}}>

            </a>
            <span className="task-time-left fright">{this.props.task.get('estimatedTime')}</span>
        </li>
    }

}




