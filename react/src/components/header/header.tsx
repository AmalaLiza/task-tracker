import * as React from "react";
import './header.scss';

export default class Header extends React.Component<any, any> {

    render(){
        return <div className="header-wrapper">
                    <div className="header">
                        <div className="width-container clearfix">
                            <h1 className="fleft logo-text">KAT Task Manager</h1>
                            <div className="user-details-wrapper fright">
                                <span className="user-detail__text">Welcome, <span className="bold-text">Sandeep</span></span>
                            </div>
                            <div className="header-search-wrapper fright">
                                <input type="text" className="header-search__input" placeholder="Search">
                            </div>
                        </div>
                    </div>
                    <div className="nav">
                        <div className="width-container">

                        </div>
                    </div>
               </div>
    }

}

