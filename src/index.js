"use strict";
/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/react-redux/react-redux.d.ts" />
var React = require('react');
var react_dom_1 = require('react-dom');
var react_redux_1 = require('react-redux');
var store_ts_1 = require('./store.ts');
var app_tsx_1 = require('./app.tsx');
const store = store_ts_1.default();
react_dom_1.render(React.createElement(react_redux_1.Provider, {"store": store}, React.createElement(app_tsx_1.default, null)), document.getElementById('root'));
//# sourceMappingURL=index.js.map