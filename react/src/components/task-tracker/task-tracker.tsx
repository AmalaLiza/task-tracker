import * as React from "react";
import ProgressBar from "../progress-bar/progress-bar.tsx";
import './task-tracker.scss';
import {TaskType} from "../../models/TaskType";

interface TaskTrackerProps {
    task : TaskType;
}

export default class TaskTracker extends React.Component<TaskTrackerProps, any> {

    render(){
        console.log(this.props)
        return <div className="progress-track" style={{display:"none"}} id="task_tracker">
            <div className="width-container clearfix">
                <a href="javascript:void(0)" className="play-ico fleft">
                </a>
                <div className="progress-wrapper fleft clearfix">

                    <div className="progress-bar-title">
                        <span>{this.props.task.get('title')}</span>
                    </div>
                    <ProgressBar
                        progress={this.props.task.get('progress')}
                    />
                </div>
            </div>
        </div>
    }
}




