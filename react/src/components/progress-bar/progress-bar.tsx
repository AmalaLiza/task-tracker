import * as React from "react";
import './progress-bar.scss';

interface ProgressBarProps {
    progress:number;
}

let ProgressBar = (props: ProgressBarProps)  => {
    let progress = props.progress + '%';
    return <div className="progress-bar-wrapper clearfix width-100per">
        <div className="time-indicator fleft">11:30:23</div>
        <div className="time-indicator fright">11:30:23</div>
        <div className="progress-bar fleft">
            <div className="progress-bar__progress fleft" style={{width:progress}}></div>
        </div>
    </div>
}

export default ProgressBar;
