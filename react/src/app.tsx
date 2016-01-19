import {TaskType} from "./models/TaskType";
"use strict";
/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/react-redux/react-redux.d.ts" />
/// <reference path="../typings/immutable/immutable.d.ts" />

import * as React from "react";
import * as Immutable from "immutable";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Header from "../src/components/header/header.tsx";
import Board from "../src/components/board/board.tsx";
import AddBoard from "../src/components/add-board/add-board.tsx"
import TaskTracker from "../src/components/task-tracker/task-tracker.tsx";
import Actions from "./actions.ts";
import Description from "./components/description/description.tsx"
import {BoardListType} from "./models/BoardListType";
import {BoardType} from "./models/BoardType";
import './stylesheets/base.scss';
import './stylesheets/common.scss';
import './stylesheets/layout.scss';
import './fonts/flaticon.scss';

interface AppProps {
    actions:any;
    data:BoardListType;
}

interface AppState {
    descriptiveTask:TaskType;
}

export class App extends React.Component<AppProps, AppState> {
    constructor(props, context) {
        super(props, context);
        this.state = Immutable.Map();
        this.state.descriptiveTask = Immutable.Map();
        this.setDescriptiveTask = this.setDescriptiveTask.bind(this);
    }

    setDescriptiveTask(task) {
        this.setState({
            descriptiveTask: task
        });
    }

    render() {
        let {data, actions} = this.props;
        console.log(this.props.data.toJS());
        let boardList:BoardType[] = data.get("boardList");
        let activeTask:TaskType = data.get("activeTask");
        let searchText:string = data.get('searchText');
        let filteredList = Immutable.List();
        if (searchText) {
            filteredList = Immutable.List(boardList
                .filter(board => board.get('taskList')
                    .filter(task => task.get('title').toLowerCase().indexOf(searchText.toLowerCase()) > -1).size > 0));
        } else {
            filteredList = Immutable.List(boardList);
        }
        let boardListElements = filteredList
            .map((board:BoardType, index:number) => (
                <Board
                    key={index}
                    id={index}
                    index={index}
                    data={board}
                    filterBy={searchText}
                    onTaskCompletion={actions.taskCompleted}
                    onPlayTask={actions.playTask}
                    onPauseTask={actions.pauseTask}
                    onExpandTask={actions.expandTask}
                    onEditBoardTitle={actions.editBoardTitle}
                    onEditTaskTitle={actions.editTaskTitle}
                    onAddTask={actions.addTask}
                    setDescriptiveTask={this.setDescriptiveTask}
                />
            ));

        return <div className="tr-wrapper">
            <Header
                onSearch={actions.searchTask}
                searchText={searchText}
            />
            <div className="main-body">
                <div className="width-container">
                    <div className="task-list clearfix">
                        {boardListElements}
                        <AddBoard
                            handleClick={actions.addBoard}
                        />
                    </div>
                </div>
            </div>
            <div className="footer">
                {activeTask.get('isPlaying')? <TaskTracker task={activeTask}/> : null }
            </div>
            <Description
                task={this.state.descriptiveTask}
            />
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