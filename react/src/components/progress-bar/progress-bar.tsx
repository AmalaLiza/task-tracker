import * as React from "react";
import './progress-bar.scss';

export default class ProgressBar extends React.Component<any, any> {

    render(){
        return <div class="progress-bar-wrapper fleft">
                    <div class="progress-bar-title">
                        <span>Create and Upload Razorthink website repositories</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-bar__progress" style="width:30%"></div>
                    </div>
                </div>
    }

}

