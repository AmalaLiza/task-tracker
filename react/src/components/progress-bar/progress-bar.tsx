import * as React from "react";
import './progress-bar.scss';
///<reference path='../../../typings/immutable/immutable.d.ts'/>
import * as Immutable from 'immutable';

interface ProgressBarProps {
    progress:number;
    progressDisplayed:number;
    createdAt:Date;
    estimatedTime:number;
}

var ProgressBar =  (props: ProgressBarProps)  => {
    let progressDisplayed = props.progressDisplayed + '%';
    let progress = props.progress;
    let createdAt = props.createdAt.getHours() + ":" + props.createdAt.getMinutes() + ":" + props.createdAt.getSeconds();
    let endTime = Immutable.Map({
        endAt: props.createdAt
    });
    endTime = endTime.update('endAt', date => new Date(props.createdAt.getTime() + props.estimatedTime * 60 * 60 * 1000));
    let endAt = endTime.get('endAt').getHours() + ":" + endTime.get('endAt').getMinutes() + ":" + endTime.get('endAt').getSeconds();
    return <div className="progress-bar-wrapper clearfix width-100per">
        <div className="time-indicator fleft">{createdAt}</div>
        <div className="time-indicator fright">{endAt}</div>
        <div className="progress-bar fleft">
            <div className={`progress-bar__progress ${progress > 100 ? "fright" : "fleft"}`} style={{width:progressDisplayed}}></div>
        </div>
    </div>
}

export default ProgressBar;
