"use strict";
/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/react-redux/react-redux.d.ts" />

import * as React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import TodoActions from './actions.ts';


export default class App extends React.Component<any,any>{
    constructor() {
        super();
    }

    render() {
        return <h1> Task Tracker</h1>
    }
}

function mapStateToProps(state) {
    return {data: state};
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(TodoActions, dispatch)};
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);