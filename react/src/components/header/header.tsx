import * as React from "react";
import {connect} from "react-redux";
import * as Actions from "../../actions.ts";
import './header.scss';

interface HeaderProps {
    searchText:string;
}

export default class Header extends React.Component<HeaderProps, any> {

    constructor(props, context) {
        super(props, context);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(e) {
        const searchText = e.target.value;
        this.props.dispatch(Actions.searchTask(searchText));
    }

    render() {
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
                        <span className="search-ico flaticon-tool1068">
                        </span>
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

function mapDispatchToProps(dispatch) {
    return { dispatch:  dispatch  }
}

export default connect(
    mapDispatchToProps
)(Header)