import "./day-tracker.css"
import * as React from "react";

export default class DayTracker extends React.Component<any, any> {

    render(){
        return <div className="day-tracker">
            <a href="javascript:void(0)">SHOW TIMELINE</a>
            <h2>11:30:23</h2>
            <span className="play-ico"></span>
            <div className="progress-wrapper">
                <div className="progress-bar-title">
                    <span>Create and Upload Razorthink website repositories</span>
                </div>
                <div className="progress-bar">
                    <div className="progress-bar__progress" style={{width:"30%"}}></div>
                    <div className="end-time">4h 30m</div>
                </div>
            </div>
            <a href="javascript:void(0)">HIDE</a>
        </div>
    }
}




