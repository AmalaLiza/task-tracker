import {Component} from 'angular2/core';
import HeaderComponent from './components/header/header.component';
import MainComponent from './components/main/main.component';
import FooterComponent from './components/footer/footer.component';
import {RightPanelComponent} from "./components/right-panel/right-panel.component";
import {TaskService} from "./components/main/task.service";

@Component({
    selector: 'app',
    directives: [HeaderComponent, MainComponent, FooterComponent, RightPanelComponent],
    template: `<div class="tr-wrapper">
        <header></header>
        <main class="main-body width-container"></main>
        <footer></footer>
        <right-panel *ngIf="taskService.showRightPanel"></right-panel>
    </div>`
})

export class AppComponent {

    constructor(public taskService: TaskService){
    }
}