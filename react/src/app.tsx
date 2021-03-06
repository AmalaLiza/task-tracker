"use strict";
/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/react-redux/react-redux.d.ts" />
/// <reference path="../typings/immutable/immutable.d.ts" />

import * as React from "react";
import * as Immutable from "immutable";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {saveBoardService} from "../service/saveBoardService.ts";
import {getBoardService} from "../service/getBoardService.ts";
import Header from "../src/components/header/header.tsx";
import Board from "../src/components/board/board.tsx";
import AddBoard from "../src/components/add-board/add-board.tsx"
import TaskTracker from "../src/components/task-tracker/task-tracker.tsx";
import * as Actions from "./actions.ts";
import Description from "./components/description/description.tsx"
import StateType from "./models/StateType.ts";
import TaskType from "./models/TaskType.ts";
import BoardType from "./models/BoardType.ts";
import './stylesheets/base.scss';
import './stylesheets/common.scss';
import './stylesheets/layout.scss';
import './fonts/flaticon.scss';

interface AppState {
    progress:number;
    estimatedTime:number;
}

export class App extends React.Component<any, AppState> {
    constructor(props, context) {
        super(props, context);
        this.state = {
            progress: 0,
            progressDisplayed: 0,
            estimatedTime: 0
        };
        this.startTaskTracker = this.startTaskTracker.bind(this)
        this.hideTask = this.hideTask.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.expandTask = this.expandTask.bind(this)
    }

    expandTask(boardIndex, taskIndex) {
        let {data} = this.props;
        data = data.setIn(['expandedTask', 'taskIndex'], taskIndex)
        this.props.dispatch(Actions.expandTask(boardIndex, taskIndex))
    }

    hideTask() {
        this.props.dispatch(Actions.hideTask());
    }

    deleteTask(taskIndex, boardIndex) {
        this.hideTask();
        this.props.dispatch(Actions.deleteTask(taskIndex, boardIndex));
    }

    startTaskTracker(boardId, taskId, isPlaying) {
        let {data} = this.props;
        this.setState({
            progress: data.getIn(['boardList', boardId, 'taskList', taskId, 'progress']),
            estimatedTime: data.getIn(['boardList', boardId, 'taskList', taskId, 'estimatedTime'])
        })

        let myTimer = () => {
            //let progress:number = this.state.progress + 100 / (this.state.estimatedTime * 60 * 60)
            let progress:number = this.state.progress + 100 / (60)
            let progressDisplayed = progress
            if(progress > 100) {
                let mod = progress / 100 | 0
                progressDisplayed = (progress % 100) / Math.pow(2, mod)
            }
            this.setState({
                progress: progress,
                progressDisplayed: progressDisplayed
            })
        }
        if (isPlaying) {
            this.props.dispatch(Actions.pauseTask(boardId, taskId, this.state.progress));
            clearInterval(this.timer);
        } else {
            if (data.getIn(["activeTask", "isPlaying"]))
                this.props.dispatch(Actions.pauseTask(data.getIn(["activeTask", "boardIndex"]), data.getIn(["activeTask", "index"]), this.state.progress));
            clearInterval(this.timer)
            this.props.dispatch(Actions.playTask(boardId, taskId));
            this.timer = setInterval(myTimer, 1000)
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.data.getIn(["activeTask", "progress"]))
            this.setState({
                progress: nextProps.data.getIn(["activeTask", "progress"])
            });
    }

    render() {
        let {data, dispatch} = this.props
        let boardList:Immutable.List<BoardType> = data.get("boardList")
        let activeTask:TaskType = data.get("activeTask")
        let expandedTask:TaskType = data.get("expandedTask")
        let searchText:string = data.get('searchText')
        let filteredList = Immutable.List()
        if (searchText) {
            filteredList = Immutable.List(boardList
                .filter(board => board.get('taskList')
                    .filter(task => task.get('title').toLowerCase().indexOf(searchText.toLowerCase()) > -1).size > 0));
        } else {
            filteredList = Immutable.List(boardList)
        }
        let boardListElements = filteredList
            .map((board:BoardType, index:number) => (
                <Board
                    key={index}
                    index={index}
                    data={board}
                    filterBy={searchText}
                    onPlayOrPauseTask={this.startTaskTracker}
                    setDescriptiveTask={this.expandTask}
                />
            ));

        let style = {
            cursor: "pointer",
            fontWeight: "bold",
            borderRadius: "3px",
            padding: "8px 15px",
            margin: "5px",
            flexGrow: 1,
            display: "inline-block",
            fontSize: "0.8em",
            color: "white",
            textDecoration: "none",
            backgroundColor: "#ED5353"
        }


        return <div className="tr-wrapper">
            <Header
                searchText={searchText}/>
            <div className="main-body">
                <button style={style} onClick={() => {dispatch(saveBoardService(boardList.toJS()))}}>Save BoardList</button>
                <button style={style} onClick={() => {dispatch(getBoardService())}}>Get BoardList</button>
                <h2 style={data.get("show")?{display : "block"}: {display : "none"}}>Boards Saved...</h2>
                <div className="width-container">
                    <div className="task-list clearfix">
                        {boardListElements}
                        <AddBoard
                            handleClick={() => {dispatch(Actions.addBoard())}}
                        />
                    </div>
                </div>
            </div>
            <div className="footer">
                {activeTask.size ? <TaskTracker
                    activeTask={activeTask}
                    onPlayOrPauseTask={this.startTaskTracker}
                    progressDisplayed={this.state.progressDisplayed}
                    progress={this.state.progress}
                /> : null}
            </div>
            {expandedTask.size ? <Description
                task={expandedTask}
                progressDisplayed={expandedTask.get('id') == activeTask.get('id') ? this.state.progressDisplayed : expandedTask.get('progress')}
                onDeleteTask={this.deleteTask}
                hideDesc={this.hideTask}
            /> : null}
        </div>
    }
}

function mapStateToProps(state) {
    return { data: state }
}

function mapDispatchToProps(dispatch) {
    return { dispatch:  dispatch  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
