"use strict";
/// <reference path="../typings/react/react.d.ts" />
/// <reference path="../typings/react/react-dom.d.ts" />
/// <reference path="../typings/react-redux/react-redux.d.ts" />

import './stylesheets/base.scss';
import './stylesheets/common.scss';
import './stylesheets/layout.scss';

import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import DevTools from "./container/DevTools.tsx";
import store from "./store.ts";
import App from "./app.tsx";

render(
    <Provider store={store}>
        <div className="height-100per">
            <App/>
            <DevTools/>
        </div>
    </Provider>,
    document.getElementById("root")
);