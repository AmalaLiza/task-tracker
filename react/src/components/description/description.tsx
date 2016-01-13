import * as React from "react";
import ProgressBar from "../progress-bar/progress-bar.tsx";
import {TaskType} from "../../models/TaskType";
import './description.scss';

interface DescProps{
    task: TaskType;
    setCurrentTask:Function;
}


export default class Description extends React.Component<DescProps, any> {

    constructor(props, context) {
        super(props, context);
        this.hideDesc = this.hideDesc.bind(this);
    }

    hideDesc(e){
        console.log(e, "calling me");
        document.getElementsByClassName("right-fixed-panel-wrapper")[0].style.display = 'none';
        document.getElementsByClassName("task-body-list__item clearfix active")[0].className = "task-body-list__item clearfix";
    }

    render() {
        return <div className="right-fixed-panel-wrapper" onClick={this.hideDesc} style={{display:"none"}}>
            <div className="right-fixed-panel">
                <div className="right-panel__actions fright">
                    <a href="javascript:void(0)" className="flaticon-star178">
                    </a>
                    <a href="javascript:void(0)" className="flaticon-delete96">
                    </a>
                </div>

                <h1 className="right-panel__heading">{this.props.task.get('title')}</h1>
                <div className="right-panel__content">
                    <div className="right-panel-sub-section">
                        <div className="accordion-head">
                            <h3 className="right-panel-sub-section__heading">Progress</h3>
                        </div>
                        <div className="accordion-cont">
                            <ProgressBar
                                progress={this.props.task.get('progress')}
                            />
                        </div>

                        <div className="accordion-cont">
                            <table className="right-panel__desc-table width-100per">
                                <tr>
                                    <td>
                                        <div>
                                            <span className="right-panel__desc-table__key bold-text">Due date:</span>
                                            <span className="right-panel__desc-table__value">
                                                {this.props.task.get('due_date')}
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span className="right-panel__desc-table__key bold-text">Estimate:</span>
                                            <span className="right-panel__desc-table__value">
                                                {this.props.task.get('estimatedTime')}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="right-panel-sub-section">
                        <div className="right-panel__tabs-wrapper">
                            <div className="right-panel__tabs-header">
                                <a className="right-panel__tabs-header__item active" href="javascript:void(0)">
                                    Description
                                </a>
                                <a className="right-panel__tabs-header__item" href="javascript:void(0)">Dependencies</a>
                                <a className="right-panel__tabs-header__item" href="javascript:void(0)">Notes</a>
                                <a className="right-panel__tabs-header__item" href="javascript:void(0)">Activity</a>
                            </div>
                            <div className="right-panel__tabs-content">
                                <div className="right-panel__tabs-content__item">
                                    <div className="right-panel__tabs-content__desc">
                                        {this.props.task.get('description')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
};
