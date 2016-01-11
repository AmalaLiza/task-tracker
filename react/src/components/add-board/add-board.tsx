import * as React from 'react';
import './add-board.scss';

export default class AddBoard extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="task-list__item add-board fleft">
            <a href="javascript:void(0)" className="primary-link" onClick={this.props.handleClick.bind(this)}>+ Add Board</a>
        </div>
    }
}