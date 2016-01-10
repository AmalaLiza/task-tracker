
import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {TaskService} from "./components/main/task/task.service";

console.log("Boot");
bootstrap(AppComponent, [TaskService]);