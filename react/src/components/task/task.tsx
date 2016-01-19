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
        this.state = {
            isPlaying: this.props.task.get('isPlaying'),
            isExpanded: false
        };
        this.onTaskComplete = this.onTaskComplete.bind(this);
        this.playAndPauseTask = this.playAndPauseTask.bind(this);
        this.setDescriptiveTask = this.setDescriptiveTask.bind(this);
    }

    onTaskComplete() {
        this.props.onTaskComplete(this.props.boardId, this.props.index);
    }

    playAndPauseTask(){
        this.setState({isPlaying: !this.state.isPlaying});
        this.props.onPlayOrPauseTask(this.props.boardId, this.props.task, this.state.isPlaying);
    }

    setDescriptiveTask(boardId, taskId){
        this.setState({isExpanded: !this.state.isExpanded});
        this.props.setDescriptiveTask(boardId, taskId, this.state.isExpanded);
    }

    render() {
        return <li className={this.state.isExpanded ? "task-body-list__item clearfix active" : "task-body-list__item clearfix"}>
            <input type="checkbox"
                   checked={this.props.task.get('completed')}
                   onChange={this.onTaskComplete}
                   className="fleft task-body-list__item__checkbox"
            />
            <label className="task-body-list__item__label fleft"
                    onClick={() => this.setDescriptiveTask(this.props.boardId, this.props.index)}
                   >
                <span className="task-body-list__item__label__text">{this.props.task.get('title')}</span>
            </label>
            <a href="javascript:void(0)"
               className={this.props.task.get('isPlaying')? 'play-ico flaticon-pause52 fright' :  'play-ico flaticon-play128 fright'}
               onClick={() => {this.playAndPauseTask()}}>

            </a>
            <span className="task-time-left fright">{this.props.task.get('estimatedTime')}</span>
        </li>
    }

}




