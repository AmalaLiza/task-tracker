import * as React from "react";

export default class Header extends React.Component<any, any> {

    render(){
        return <div className="header-wrapper">
            <div className="header">
                <div className="width-container clearfix">
                    <h1 className="fleft logo-text">TASK TRACKER</h1>
                    <div className="header-search-wrapper fright">
                        <input type="text" className="header-search__input" placeholder="Search"/>
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

