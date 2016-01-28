import {Component} from 'angular2/core';
import HeaderComponent from './components/header/header.component';
import MainComponent from './components/main/main.component';
import FooterComponent from './components/footer/footer.component';
import {RightPanelComponent} from "./components/right-panel/right-panel.component";
import {TaskService} from "./components/main/task.service";
import OffClickDirective from "./directives/off-click.directive";

@Component({
    selector: 'app',
    directives: [HeaderComponent, MainComponent, FooterComponent, RightPanelComponent, OffClickDirective],
    template: `<div class="tr-wrapper">
        <header></header>
        <main class="main-body width-container"></main>
        <footer *ngIf="taskService.showFooter"></footer>
        <right-panel *ngIf="taskService.showRightPanel" [offClick]="clickedOutside"></right-panel>
    </div>`
})

export class AppComponent {

    constructor(public taskService: TaskService){
        this.clickedOutside = this.clickedOutside.bind(this);
    }

    clickedOutside(){
        this.taskService.showRightPanel = false;
    }
}