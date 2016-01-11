import * as React from "react";
import './day-tracker.scss';

export default class Header extends React.Component<any, any> {

    render(){
        return <div class="daytime-track">
                    <div class="width-container clearfix">
                        <h2 class="fleft daytime-label fleft">Today</h2>
                        <div class="progress-bar-wrapper fleft clearfix">
                            <div class="progress-bar fleft clearfix">
                                <div class="progress-bar__progress fleft" style="width:30%"></div>
                            </div>
                            <div class="time-indicator fright">4h 30m</div>
                        </div>
                    </div>
                </div>
    }

}

