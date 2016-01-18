import * as React from "react";
import './progress-bar.scss';

interface ProgressBarProps{
    progress:string;
}

export default class ProgressBar extends React.Component<ProgressBarProps, any> {

    constructor(){
        super();
    }

    render() {
        let progress = this.props.progress+'%';
        return <div className="progress-bar-wrapper clearfix width-100per">
            <div className="time-indicator fleft">11:30:23</div>
            <div className="time-indicator fright">11:30:23</div>
            <div className="progress-bar fleft">
                <div className="progress-bar__progress fleft" style={{width:progress}}></div>
            </div>
        </div>
    }

}

