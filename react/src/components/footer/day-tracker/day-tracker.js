var React = require("react");
require('./footer.scss');
class DayTracker extends React.Component {
    render() {
        return React.createElement("div", {"className": "progress-track"}, React.createElement("a", {"href": "javascript:void(0)"}, "SHOW TIMELINE"), React.createElement("h2", null, "11:30:23"), React.createElement("span", {"className": "play-ico"}), React.createElement("div", {"className": "progress-wrapper"}, React.createElement("div", {"className": "progress-bar-title"}, React.createElement("span", null, "Create and Upload Razorthink website repositories")), React.createElement("div", {"className": "progress-bar"}, React.createElement("div", {"className": "progress-bar__progress", "style": { width: "30%" }}), React.createElement("div", {"className": "end-time"}, "4h 30m"))), React.createElement("a", {"href": "javascript:void(0)"}, "HIDE"));
    }
}
exports.DayTracker = DayTracker;
//# sourceMappingURL=day-tracker.js.map