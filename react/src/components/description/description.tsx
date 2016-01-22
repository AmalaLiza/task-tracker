import * as React from "react";
import listensToClickOutside from 'react-onclickoutside/decorator';
import ProgressBar from "../progress-bar/progress-bar.tsx";
import Actions from  "../../actions.ts";
import store from "../../store.ts";
import TaskType from "../../models/TaskType.ts";
import './description.scss';

interface DescProps{
    task:TaskType;
    onDeleteTask:Function;
    onSaveTask:Function;
    progress:number;
    hideDesc:Function;
}

class Description extends React.Component<DescProps, any> {

    constructor(props, context) {
        super(props, context);
        this.state = {
            editMode: false
        }
    }

    handleClickOutside(){
        this.props.hideDesc();
    }

    onEditButtonClick(){
        this.props.onSaveTask({title: this.refs.title.value, due_date: this.refs.due_date.value, estimatedTime: this.refs.estimatedTime.value, description: this.refs.description.value});
        this.refs.title.value = '';
        this.refs.due_date.value = '';
        this.refs.estimatedTime.value = '';
        this.refs.description.value = '';
        this.setState({editMode: false});
    }

    render() {
        return <div className="right-fixed-panel" style={this.props.task.size ? {} : {display:"none"}}>
            <div className="right-panel__actions fright">
                <a href="javascript:void(0)"
                   className="flaticon-edit45"
                   style={this.state.editMode ? {display:"none"} : {}}
                   onClick={() => this.setState({editMode: true})}
                >
                </a>
                <a href="javascript:void(0)"
                   className="flaticon-check19"
                   style={this.state.editMode ? {} : {display:"none"}}
                   onClick={(event) => {this.onEditButtonClick()}}
                >
                </a>
                <a href="javascript:void(0)"
                   className="flaticon-delete85"
                   style={this.state.editMode ? {} : {display:"none"}}
                   onClick={() => this.setState({editMode: false})}
                >
                </a>
                <a href="javascript:void(0)"
                   className="flaticon-delete96"
                   onClick={() => {this.props.onDeleteTask(this.props.task.get('index'), this.props.task.get('boardIndex'))}}
                >
                </a>
            </div>
            <div className="right-panel__actions fright"></div>
            <h1 className="right-panel__heading"
                style={this.state.editMode ? {display:"none"} : {}}>
                {this.props.task.get('title')}
            </h1>
            <input type="text"
                   className="right-panel__heading-input"
                   style={this.state.editMode ? {display:"block"} : {display:"none"}}
                   ref="title"
                   defaultValue={this.props.task.get('title')}/>
            {this.props.task.get('title')}
            <div className="right-panel__content">
                <div className="right-panel-sub-section">
                    <div className="accordion-head">
                        <h3 className="right-panel-sub-section__heading">Progress</h3>
                    </div>
                    <div className="accordion-cont">
                        <ProgressBar
                            progress={this.props.progress}
                        />
                    </div>

                    <div className="accordion-cont">
                        <table className="right-panel__desc-table width-100per">
                            <tr>
                                <td>
                                    <div>
                                        <span className="right-panel__desc-table__key bold-text">Due date:</span>
                                        <span className="right-panel__desc-table__value"
                                              style={this.state.editMode ? {display:"none"} : {}}>
                                            {this.props.task.get('due_date')}
                                        </span>
                                        <input type="text"
                                               className="right-panel__desc-table__input"
                                               placeholder="Enter due date"
                                               style={this.state.editMode ? {} : {display:"none"}}
                                               defaultValue={this.props.task.get('due_date')}
                                               ref="due_date"
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <span className="right-panel__desc-table__key bold-text">Estimate:</span>
                                        <span className="right-panel__desc-table__value"
                                              style={this.state.editMode ? {display:"none"} : {}}
                                        >
                                            {this.props.task.get('estimatedTime')}
                                        </span>
                                        <input type="text"
                                               className="right-panel__desc-table__input"
                                               placeholder="Enter Estimate"
                                               style={this.state.editMode ? {} : {display:"none"}}
                                               defaultValue={this.props.task.get('estimatedTime')}
                                               ref="estimatedTime"
                                        />
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
                                <div className="right-panel__tabs-content__desc"
                                     style={this.state.editMode ? {display:"none"} : {}}
                                >
                                    {this.props.task.get('description')}
                                </div>
                                <textarea className="right-panel__tabs-content__input"
                                          style={this.state.editMode ? {} : {display:"none"}}
                                          ref="description"
                                          defaultValue={this.props.task.get('description')}
                                >
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
 export default listensToClickOutside(Description);
