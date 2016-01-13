import * as React from "react";
import ProgressBar from "../progress-bar/progress-bar.tsx";
import './task-tracker.scss';

interface TaskTrackerProps {

}

export default class TaskTracker extends React.Component<TaskTrackerProps, any> {

    render(){
        return <div className="progress-track">
            <div className="width-container clearfix">
                <a href="javascript:void(0)" className="play-ico fleft"></a>
                <div className="progress-wrapper fleft clearfix">

                    <div className="progress-bar-title">
                        <span>Create and Upload Razorthink website repositories</span>
                    </div>
                    <ProgressBar/>
                </div>
            </div>
        </div>
    }
}




