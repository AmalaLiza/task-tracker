var React = require("react");
require('./header.scss');
class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch(e) {
        const searchText = e.target.value.trim();
        this.props.onSearch(searchText);
    }
    render() {
        return React.createElement("div", {"className": "header-wrapper"}, React.createElement("div", {"className": "header"}, React.createElement("div", {"className": "width-container clearfix"}, React.createElement("h1", {"className": "fleft logo-text"}, "KAT Task Manager"), React.createElement("div", {"className": "user-details-wrapper fright"}, React.createElement("span", {"className": "user-detail__text"}, "Welcome,", React.createElement("span", {"className": "bold-text"}, "Sandeep"))), React.createElement("div", {"className": "header-search-wrapper fright"}, React.createElement("input", {"type": "text", "className": "header-search__input", "placeholder": "Search", "value": this.props.searchText, "onChange": this.handleSearch})))), React.createElement("div", {"className": "nav"}, React.createElement("div", {"className": "width-container"})));
    }
}
exports.Header = Header;
//# sourceMappingURL=header.js.map