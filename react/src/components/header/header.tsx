import * as React from "react";
import './header.scss';

export default class Header extends React.Component<any, any> {

    constructor(props, context) {
        super(props, context);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e) {
        const searchText = e.target.value.trim();
        this.props.onSearch(searchText);
    }

    render(){
        return <div className="header-wrapper">
                    <div className="header">
                        <div className="width-container clearfix">
                            <h1 className="fleft logo-text">KAT Task Manager</h1>
                            <div className="user-details-wrapper fright">
                                <span className="user-detail__text">
                                    Welcome,
                                    <span className="bold-text">Sandeep</span>
                                </span>
                            </div>
                            <div className="header-search-wrapper fright">
                                <input
                                    type="text"
                                    className="header-search__input"
                                    placeholder="Search"
                                    value={this.props.searchText}
                                    onChange={this.handleSearch}
                                />
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

