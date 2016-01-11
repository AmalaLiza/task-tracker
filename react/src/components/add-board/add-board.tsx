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
        return <div className="task-list__item add-board fleft" onClick={this.props.handleClick.bind(this)}>
            <a href="javascript:void(0)" className="primary-link">+ Add Board</a>
        </div>
    }
}