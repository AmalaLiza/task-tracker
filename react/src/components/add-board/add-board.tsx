import * as React from 'react';
import './add-board.scss';

interface AddBoardProps {
    handleClick: Function;
}

let AddBoard = (props:AddBoardProps) => (
    <div className="task-list__item add-board fleft" onClick={props.handleClick.bind(this)}>
            <a href="javascript:void(0)" className="primary-link">+ Add Board</a>
    </div>);

export default AddBoard;