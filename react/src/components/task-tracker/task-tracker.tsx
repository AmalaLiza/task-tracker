import * as React from "react";
import ProgressBar from "../progress-bar/progress-bar.tsx";
import TaskType from "../../models/TaskType.ts";
import './task-tracker.scss';

interface TaskTrackerProps {
    activeTask:TaskType;
    onPlayOrPauseTask: Function;
    progress:number;
    progressDisplayed:number;
}

export default class TaskTracker extends React.Component<TaskTrackerProps, any> {

    constructor(props) {
        super(props);
    }

    render() {
        let isPlaying = this.props.activeTask.get('isPlaying');
        return <div className="progress-track"
                    style={this.props.activeTask.size ? {} : {display:"none"}}>
            <div className="width-container clearfix">
                <a href="javascript:void(0)"
                   className={isPlaying ? "play-ico flaticon-pause52 fleft" : 'play-ico flaticon-play128 fleft'}
                   onClick={() => this.props.onPlayOrPauseTask(this.props.activeTask.get('boardIndex'), this.props.activeTask.get('index'), this.props.activeTask.get('isPlaying'))}
                >
                </a>
                <div className="progress-wrapper fleft clearfix">

                    <div className="progress-bar-title">
                        <span>{this.props.activeTask.get('title')}</span>
                    </div>
                    <ProgressBar
                        progressDisplayed={this.props.progressDisplayed}
                        progress={this.props.progress}
                    />
                </div>
            </div>
        </div>
    }
}




