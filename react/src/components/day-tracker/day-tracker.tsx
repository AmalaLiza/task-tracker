import * as React from "react";
import './day-tracker.scss';

export default class DayTracker extends React.Component<any, any> {

    render(){
        return <div className="daytime-track">
                    <div className="width-container clearfix">
                        <h2 className="fleft daytime-label fleft">Today</h2>
                        <div className="progress-bar-wrapper fleft clearfix">
                            <div className="progress-bar fleft clearfix">
                                <div className="progress-bar__progress fleft" style={{width:'50%'}}></div>
                            </div>
                            <div className="time-indicator fright">4h 30m</div>
                        </div>
                    </div>
                </div>
    }
};
