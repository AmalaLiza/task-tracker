/// <reference path="../typings/immutable.d.ts" />

import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {TaskService} from "./components/main/task.service.ts";

console.log("Boot");
bootstrap(AppComponent, [TaskService]);