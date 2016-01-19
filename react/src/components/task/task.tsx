import * as React from "react";
import {TaskType} from "../../models/TaskType";
import Description from "../description/description.tsx";
import './task.scss';

interface TaskProps {
    key:number;
    index: number;
    boardId:number;
    task: TaskType;
    onTaskComplete:Function;
    setDescriptiveTask:Function;
    onPlayOrPauseTask?:Function;
}

export default class Task extends React.Component<TaskProps, any> {

    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.state.isPlaying = true;
        this.onTaskComplete = this.onTaskComplete.bind(this);
        this.playAndPauseTask = this.playAndPauseTask.bind(this);
    }

    onTaskComplete() {
        this.props.onTaskComplete(this.props.boardId, this.props.index);
    }

    playAndPauseTask(){
        this.setState({isPlaying: !this.state.isPlaying});
        this.props.onPlayOrPauseTask(this.props.boardId, this.props.task, this.state.isPlaying);
    }

    render() {
        return <li className="task-body-list__item clearfix">
            <input type="checkbox"
                   checked={this.props.task.get('completed')}
                   onChange={this.onTaskComplete}
                   className="fleft task-body-list__item__checkbox"
            />
            <label className="task-body-list__item__label fleft"
                    onClick={() => this.props.setDescriptiveTask(this.props.boardId, this.props.index)}
                   >
                <span className="task-body-list__item__label__text">{this.props.task.get('title')}</span>
            </label>
            <a href="javascript:void(0)"
               className={!this.props.task.get('isPlaying')? "play-ico flaticon-play128 fright" : 'play-ico flaticon-pause52 fright'}
               onClick={() => {this.playAndPauseTask()}}>

            </a>
            <span className="task-time-left fright">{this.props.task.get('estimatedTime')}</span>
        </li>
    }

}




