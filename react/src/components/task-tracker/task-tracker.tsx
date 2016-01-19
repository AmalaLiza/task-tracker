import * as React from "react";
import ProgressBar from "../progress-bar/progress-bar.tsx";
import {TaskType} from "../../models/TaskType";
import './task-tracker.scss';

interface TaskTrackerProps {
    task:TaskType;
    setProgress:Function;
}

export default class TaskTracker extends React.Component<TaskTrackerProps, any> {

    constructor(props){
        super(props);
        this.state = {};
        this.state.progress = props.task.get('progress');
    }

    componentDidMount() {
        this.setState({progress : this.props.task.get('progress')});
        let myTimer = () => {
            console.log("timer started", this.state.progress);
            this.setState({progress: this.state.progress+.05});
        }
        let timer = setInterval(myTimer, 1000);
    }

    componentWillReceiveProps(props){
        this.props.task.update('progress', progress => this.state.progress);
        this.setState({progress : props.task.get('progress')});
    }

    render() {
        return <div className="progress-track"
                    style={this.props.task.get('isPlaying')? {display:"block"} : {display:"none"}}>
            <div className="width-container clearfix">
                <a href="javascript:void(0)"
                   className={this.props.task.get('isPlaying')? "play-ico flaticon-pause52 fleft" : 'play-ico flaticon-play128 fleft'}>
                </a>
                <div className="progress-wrapper fleft clearfix">

                    <div className="progress-bar-title">
                        <span>{this.props.task.get('title')}</span>
                    </div>
                    <ProgressBar
                        progress={this.state.progress}
                    />
                </div>
            </div>
        </div>
    }
}




