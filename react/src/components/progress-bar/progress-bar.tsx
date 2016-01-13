import * as React from "react";
import './progress-bar.scss';

export default class ProgressBar extends React.Component<any, any> {

    constructor(){
        super();
    }

    render() {
        return <div className="progress-bar-wrapper">
            <div className="time-indicator fleft">11:30:23</div>
            <div className="time-indicator fright">11:30:23</div>

            <div className="progress-bar fleft">
                <div className="progress-bar__progress fleft" style={{width:'30%'}}></div>
            </div>
        </div>
    }

}

