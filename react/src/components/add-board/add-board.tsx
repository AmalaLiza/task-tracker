import * as React from 'react';

export default class AddBoard extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        return <a href="javascript:void(0)" className="primary-link" onClick={this.props.handleClick.bind(this)}>ADD BOARD</a>
    }
}