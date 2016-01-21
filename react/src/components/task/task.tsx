import * as React  from "react";
import TaskType from "../../models/TaskType";
import Description from "../description/description.tsx";
import './task.scss';

interface TaskProps {
    key:number;
    index: number;
    boardIndex:number;
    task: TaskType;
    onTaskComplete:Function;
    setDescriptiveTask:Function;
    onPlayOrPauseTask?:Function;
}

export default class Task extends React.Component<TaskProps, any> {

    constructor(props, context) {
        super(props, context);
        this.state = {
            isExpanded: false
        };
        this.onTaskComplete = this.onTaskComplete.bind(this);
        this.playAndPauseTask = this.playAndPauseTask.bind(this);
        this.setDescriptiveTask = this.setDescriptiveTask.bind(this);
    }

    onTaskComplete() {
        this.props.onTaskComplete(this.props.boardIndex, this.props.index);
    }

    playAndPauseTask(boardId, taskId){
        this.props.onPlayOrPauseTask(boardId, taskId, this.props.task.get('isPlaying'));
    }

    setDescriptiveTask(boardIndex, taskIndex){
        this.setState({
            isExpanded: !this.state.isExpanded
        });
        this.props.setDescriptiveTask(boardIndex, taskIndex, this.state.isExpanded);
    }

    render() {
        return <li className={`task-body-list__item clearfix ${this.props.task.get('isExpanded')?"active":""}`}>
            <input type="checkbox"
                   checked={this.props.task.get('completed')}
                   onChange={this.onTaskComplete}
                   className="fleft task-body-list__item__checkbox"
            />
            <label className="task-body-list__item__label fleft"
                   onClick={() => this.setDescriptiveTask(this.props.boardIndex, this.props.index)}
            >
                <span className="task-body-list__item__label__text">{this.props.task.get('title')}</span>
            </label>
            <a href="javascript:void(0)"
               className={`play-ico fright ${this.props.task.get('isPlaying')?'flaticon-pause52':'flaticon-play128'}`}
               onClick={() => {this.playAndPauseTask(this.props.boardIndex, this.props.index)}}>

            </a>
            <span className="task-time-left fright">{this.props.task.get('estimatedTime')}</span>
        </li>
    }

}



