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
    currentTask:TaskType;
    descriptiveTask:TaskType;
}

export class App extends React.Component<AppProps, AppState> {
    constructor(props, context) {
        super(props, context);
        this.state = Immutable.Map();
        this.state.currentTask = Immutable.Map();
        this.setDescriptiveTask = this.setDescriptiveTask.bind(this);
    }

    setDescriptiveTask(boardId, taskId) {
        let {data} = this.props;
        let task = data.getIn(["boardList", boardId, "taskList", taskId]);
        this.setState({
            descriptiveTask: task
        });
    }

    setCurrentTask(boardId, taskId, isPlaying) {
        let {data} = this.props;
        let task = data.getIn(["boardList", boardId, "taskList", taskId]);
        task = task.set('isPlaying', isPlaying);
        this.setState({
            currentTask: task
        });
    }

    render() {
        let {data, actions} = this.props
        let boardList:BoardType[] = data.get("boardList")
        let searchText:string = data.get('searchText')
        let filteredList = Immutable.List();
        if (searchText) {
            filteredList = Immutable.List(boardList
                .filter(board => board.get('taskList').filter(task => task.get('title').toLowerCase().indexOf(searchText.toLowerCase()) > -1).size > 0));
        } else {
            filteredList = Immutable.List(boardList);
        }
        let boardListElements = filteredList
            .map((board:BoardType, index:number) => (
                <Board
                    key={index}
                    id={board.get('id')}
                    index={index}
                    data={board}
                    onTaskCompletion={actions.taskCompleted}
                    onPlayTask={actions.playTask}
                    onPauseTask={actions.pauseTask}
                    onExpandTask={actions.expandTask}
                    onEditBoardTitle={actions.editBoardTitle}
                    onEditTaskTitle={actions.editTaskTitle}
                    onAddTask={actions.addTask}
                    setDescriptiveTask={this.setDescriptiveTask()}
                    setCurrentTask={this.setCurrentTask()}
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
                <TaskTracker
                    task={this.state.currentTask}
                />
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