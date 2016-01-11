import * as React from "react";
import './day-tracker.scss';

interface DayTrackerProps{

}

export default class DayTracker extends React.Component<DayTrackerProps, any> {

    render(){
        return <div className="daytime-track">
                    <div className="width-container clearfix">
                        <h2 className="fleft daytime-label fleft">Today</h2>
                        <div className="progress-bar-wrapper fleft clearfix">
                            <div className="progress-bar fleft clearfix">
                                <div className="progress-bar__progress fleft" style={{width:'30%'}}></div>
                            </div>
                            <div className="time-indicator fright">4h 30m</div>
                        </div>
                    </div>
                </div>
    }
};
