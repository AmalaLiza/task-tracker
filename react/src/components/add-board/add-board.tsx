import * as React from 'react';
import './add-board.scss';

interface AddBoardProps {
    handleClick: Function;
}

export default class AddBoard extends React.Component<AddBoardProps, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="task-list__item add-board fleft">
            <a href="javascript:void(0)" className="primary-link" onClick={this.props.handleClick.bind(this)}>+ Add Board</a>
        </div>
    }
}