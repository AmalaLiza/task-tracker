"use strict";
/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/react-redux/react-redux.d.ts" />

import * as React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Header from "../src/components/header/header.tsx";
import Board from "../src/components/board/board.tsx";
import AddBoard from "../src/components/add-board/add-board.tsx"
import TaskTracker from "../src/components/task-tracker/task-tracker.tsx";
import Actions from "./actions.ts";
import DayTracker from "./components/day-tracker/day-tracker.tsx";
import {BoardListType} from "./models/BoardListType";
import {BoardType} from "./models/BoardType";
import './stylesheets/base.scss';
import './stylesheets/common.scss';
import './stylesheets/layout.scss';


export class App extends React.Component<any, any> {
    constructor() {
        super();
    }

    render() {
        let {data, actions} = this.props;
        let boardList:BoardType[] = data.get("boardList");
        let boardListElements = boardList
            .map((board:BoardType, index:number) => (
                <Board
                    key={index}
                    id={board.get('id')}
                    index={index}
                    data={board}
                    onTaskCompletion={actions.taskCompleted}
                    onTaskPlay={actions.playTask}
                    onPauseTask={actions.pauseTask}
                    onExpandTask={actions.expandTask}
                    onEditBoardTitle={actions.editBoardTitle}
                    onEditTaskTitle={actions.editTaskTitle}
                    onAddTask={actions.addTask}
                />
            ));

        return <div className="tr-wrapper">
            <Header/>
            <div className="main-body">
                <div className="width-container">
                    <div className="task-list clearfix">
                        {boardListElements}
                        <AddBoard handleClick={actions.addBoard}/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <TaskTracker/>
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