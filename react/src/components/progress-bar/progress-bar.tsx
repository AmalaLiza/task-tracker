import * as React from "react";
import './progress-bar.scss';

interface ProgressBarProps {
    progress:number;
    progressDisplayed:number;
}

var ProgressBar =  (props: ProgressBarProps)  => {
    let progressDisplayed = props.progressDisplayed + '%';
    let progress = props.progress;
    return <div className="progress-bar-wrapper clearfix width-100per">
        <div className="time-indicator fleft">11:30:23</div>
        <div className="time-indicator fright">11:30:23</div>
        <div className="progress-bar fleft">
            <div className={`progress-bar__progress ${progress > 100 ? "fright" : "fleft"}`} style={{width:progressDisplayed}}></div>
        </div>
    </div>
}

export default ProgressBar;
