import * as React from "react";
import './progress-bar.scss';

export default class ProgressBar extends React.Component<any, any> {

    render(){
        return <div className="progress-bar-wrapper fleft">
                    <div className="progress-bar-title">
                        <span>Create and Upload Razorthink website repositories</span>
                    </div>
                    <div className="progress-bar">
                        <div className="progress-bar__progress" style="width:30%"></div>
                    </div>
                </div>
    }

}

