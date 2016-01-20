import * as React from "react";
import ProgressBar from "../progress-bar/progress-bar.tsx";
import TaskType from "../../models/TaskType";
import './description.scss';

interface DescProps{
    task: TaskType;
    display: Immutable.Map<string, string>;
    onDeleteTask:Function;
}


export default class Description extends React.Component<DescProps, any> {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        return <div className="right-fixed-panel" style={this.props.display ? {display:"block"} : {display:"none"}}>
                <div className="right-panel__actions fright">
                    <a href="javascript:void(0)"
                       className="flaticon-delete96"
                       onClick={() => {
                       this.props.onDeleteTask(this.props.task.get('id'), this.props.task.get('boardId'));}}
                        >
                    </a>
                </div>

                <h1 className="right-panel__heading">{this.props.task.get('title')}</h1>
                <input type="text" className="right-panel__heading-input" placeholder="Enter Task Header" style={display:"none"}/>
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
                                            <input type="text"
                                                   className="right-panel__desc-table__input"
                                                   placeholder="Enter due date"
                                                   style={{display:"none"}}/>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span className="right-panel__desc-table__key bold-text">Estimate:</span>
                                            <span className="right-panel__desc-table__value">
                                                {this.props.task.get('estimatedTime')}
                                            </span>
                                            <input type="text" className="right-panel__desc-table__input"
                                                   placeholder="Enter Estimate" style={{display:"none"}}/>
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
                                <a className="right-panel__tabs-header__item" href="javascript:void(0)">Activity</a>
                            </div>
                            <div className="right-panel__tabs-content">
                                <div className="right-panel__tabs-content__item">
                                    <div className="right-panel__tabs-content__desc">
                                        {this.props.task.get('description')}
                                    </div>
                                    <textarea className="right-panel__tabs-content__input" style={{display:"none"}}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    }
};
