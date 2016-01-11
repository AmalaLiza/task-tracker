import * as React from "react";
import './task-tracker.scss'

export default class DayTracker extends React.Component<any, any> {

    render(){
        return <div className="progress-track">
            <div className="width-container clearfix">
                <a href="javascript:void(0)" className="play-ico fleft"></a>
                <div className="progress-wrapper fleft clearfix">

                    <div className="time-indicator fleft">11:30:23</div>
                    <div className="progress-bar-wrapper fleft">
                        <div className="progress-bar-title">
                            <span>Create and Upload Razorthink website repositories</span>
                        </div>
                        <div className="progress-bar">
                            <div className="progress-bar__progress" style="width:30%"></div>
                        </div>
                    </div>
                    <div className="time-indicator fright">11:30:23</div>

                </div>
            </div>
        </div>
    }
}




