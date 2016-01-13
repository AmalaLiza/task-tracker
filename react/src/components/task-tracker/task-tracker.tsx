import * as React from "react";
import './task-tracker.scss';

interface TaskTrackerProps{

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
                    <div className="progress-bar-wrapper">
                        <div className="time-indicator fleft">11:30:23</div>
                        <div className="time-indicator fright">11:30:23</div>

                        <div className="progress-bar fleft">
                            <div className="progress-bar__progress fleft" style={{width:'30%'}}></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    }
}




