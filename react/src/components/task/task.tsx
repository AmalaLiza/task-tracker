import * as React from "react";

export default class Task extends React.Component<any, any> {

    render(){
        console.log("task", this.props.data.get('value'));

        return <li className="task-body-list__item clearfix">
            <label className="task-body-list__item__label fleft">
                <input type="checkbox"/>
                <span className="task-body-list__item__label__text">{this.props.data.get('value')}</span>
            </label>
            <a href="javascript:void(0)" className="play-ico fright display-none"></a>
            <span className="task-time-left fright">{this.props.data.get('estimatedTime')}</span>
        </li>
    }

}




