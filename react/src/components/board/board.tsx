import * as React from "react";
import './main-body.scss';
import './board.scss';

export default class Board extends React.Component<any,any> {
    render(){
        return <div className="task-list__item fleft">
                    <div className="task-header-wrapper">
                        <h2 className="task-header align-center">Design<span className="task-no"> (12)</span></h2>
                    </div>
                    <div className="task-body">
                        <ul className="task-body-list">
                            <li className="task-body-list__item clearfix">
                                <label className="task-body-list__item__label fleft">
                                    <input type="checkbox"/>
                                        <span className="task-body-list__item__label__text">Create designs for insight screen</span>
                                </label>
                                <a href="javascript:void(0)" className="play-ico fright"></a>
                                <span className="task-time-left fright display-none">1:15:00</span>
                            </li>
                            <li className="task-body-list__item clearfix">
                                <label className="task-body-list__item__label fleft">
                                    <input type="checkbox"/>
                                        <span className="task-body-list__item__label__text">Create designs for insight screen</span>
                                </label>
                                <a href="javascript:void(0)" className="play-ico fright display-none"></a>
                                <span className="task-time-left fright">1:15:00</span>
                            </li>
                            <li className="task-body-list__item clearfix">
                                <label className="task-body-list__item__label fleft">
                                    <input type="checkbox"/>
                                        <span className="task-body-list__item__label__text">Create designs for insight screen</span>
                                </label>
                                <a href="javascript:void(0)" className="play-ico fright display-none"></a>
                                <span className="task-time-left fright">1:15:00</span>
                            </li>
                            <li className="task-body-list__item clearfix">
                                <label className="task-body-list__item__label fleft">
                                    <input type="checkbox"/>
                                        <span className="task-body-list__item__label__text">Create designs for insight screen</span>
                                </label>
                                <a href="javascript:void(0)" className="play-ico fright display-none"></a>
                                <span className="task-time-left fright">1:15:00</span>
                            </li>
                        </ul>
                    </div>
                    <div className="task-footer">
                        <a href="javascript:void(0)" className="primary-link add-task-link">+ Add Task</a>
                    </div>
                </div>
    }
}

