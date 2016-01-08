"use strict";
/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/react-redux/react-redux.d.ts" />

import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Header from "../src/components/header/header.tsx";
import Board from "../src/components/board/board.tsx";
import DayTracker from "../src/components/footer/day-tracker/day-tracker.tsx";
import Actions from "./actions.ts";


export class App extends React.Component<any, any> {
    constructor() {
        super();
    }

    render() {
        console.log(this.props);
        let { data, actions } = this.props
        let { boardList } = data
        let boardListElements = boardList
            .map((board, index) => (
                <Board
                    id = { board.id }
                    onTaskCompletion = { actions.taskCompleted }
                    onTaskPlay = { actions.playTask }
                    onPauseTask = { actions.pauseTask }
                    onExpandTask = { actions.expandTask }
                    onEditBoardTitle = { actions.editBoardTitle }
                    onEditTaskTitle = { actions.editTaskTitle }
                />
            ));
        return <div className="tr-wrapper">
            <Header/>
            <div className="main-body">
                <div className="width-container">
                    <div className="task-list clearfix">
                        { boardListElements }
                    </div>
                    <div>
                        <a href="javascript:void(0)" className="primary-link">ADD BOARD</a>
                    </div>
                </div>
            </div>
            <div className="footer">
                <DayTracker/>
            </div>
        </div>
    }
}

function mapStateToProps(state) {
    return {data: state};
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(Actions, dispatch)};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);