import * as React from "react";
import ProgressBar from "../progress-bar/progress-bar.tsx";
import TaskType from "../../models/TaskType";
import './task-tracker.scss';

interface TaskTrackerProps {
    task:TaskType;
    progress: number;
}

export default class TaskTracker extends React.Component<TaskTrackerProps, any> {

    constructor(props){
        super(props);
    }

    render() {
        return <div className="progress-track"
                    style={this.props.task.get('isPlaying')? {display:"block"} : {display:"none"}}>
            <div className="width-container clearfix">
                <a href="javascript:void(0)"
                   className={this.props.task.get('isPlaying')? "play-ico flaticon-pause52 fleft" : 'play-ico flaticon-play128 fleft'}>
                </a>
                <div className="progress-wrapper fleft clearfix">

                    <div className="progress-bar-title">
                        <span>{this.props.task.get('title')}</span>
                    </div>
                    <ProgressBar
                        progress={this.props.progress}
                    />
                </div>
            </div>
        </div>
    }
}




