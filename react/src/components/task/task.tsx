import * as React  from "react";
import TaskType from "../../models/TaskType.ts";
import * as Actions from "../../actions.ts"
import {connect} from "react-redux";
import './task.scss';

interface TaskProps {
    key:number;
    index: number;
    boardIndex:number;
    taskId:number;
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
        this.props.dispatch(Actions.taskCompleted(this.props.boardIndex, this.props.taskId));
    }

    playAndPauseTask(boardId, taskId){
        this.props.onPlayOrPauseTask(boardId, taskId, this.props.task.get('isPlaying'));
    }

    setDescriptiveTask(boardIndex, taskIndex){
        this.setState({ isExpanded: !this.state.isExpanded});
        this.props.setDescriptiveTask(boardIndex, taskIndex, this.state.isExpanded);
    }

    render() {
        return <li
            className={`task-body-list__item clearfix ${this.props.task.get('isExpanded')?"active":""}`}
            onClick={() => this.setDescriptiveTask(this.props.boardIndex, this.props.index)}
        >
            <input type="checkbox"
                   checked={this.props.task.get('completed')}
                   onChange={this.onTaskComplete}
                   onClick={(e) => {e.stopPropagation()}}
                   className="fleft task-body-list__item__checkbox"
            />
            <label className="task-body-list__item__label fleft">
                <span className="task-body-list__item__label__text">{this.props.task.get('title')}</span>
            </label>
            <a href="javascript:void(0)"
               className={`play-ico fright ${this.props.task.get('isPlaying')?'flaticon-pause52':'flaticon-play128'}`}
               onClick={(e) => {this.playAndPauseTask(this.props.boardIndex, this.props.index); e.stopPropagation()}}>

            </a>
            <span className="task-time-left fright">{this.props.task.get('estimatedTime')}</span>
        </li>
    }

}

function mapDispatchToProps(dispatch) {
    return {
        dispatch: dispatch
    }
}

export default connect(
    mapDispatchToProps
)(Task)