import './board.scss';
import './main-body.scss';
import * as React from "react";
import Task from '../task/task.tsx';

export default class Board extends React.Component<any,any> {

    constructor(){
        super();
    }

    onAddTask(value, boardIndex){
        this.props.onAddTask(value, boardIndex);
    }

    render() {
        let taskList = this.props.data.get("taskList");
        let taskListElements = taskList
            .map((task, index) => (
                <Task
                    key={index}
                    index={index}
                    id={task.id}
                    data={task}
                />
            ));

        return <div className="task-list__item fleft">
            <div className="task-header-wrapper">
                <h2 className="task-header align-center">{this.props.data.get('title')}
                    <span className="task-no">{"("+taskListElements.size+")"}</span>
                </h2>
            </div>
            <div className="task-body">
                <ul className="task-body-list">
                    {taskListElements}
                </ul>
            </div>
            <div className="task-footer">
                <a href='javascript:void(0)' className="primary-link add-task-link" onClick={() => {this.onAddTask("Amala", this.props.index)}}>+ Add Task</a>
                <input style={{display:'none'}}/>
            </div>
        </div>
    }
}

