import {Component} from 'angular2/core';
import HeaderComponent from './components/header/header.component';
import MainComponent from './components/main/main.component';
import FooterComponent from './components/footer/footer.component';
import {RightPanelComponent} from "./components/right-panel/right-panel.component";

@Component({
    selector: 'app',
    directives: [HeaderComponent, MainComponent, FooterComponent, RightPanelComponent],
    template: `<div class="tr-wrapper">
        <header></header>
        <main class="main-body width-container"></main>
        <footer></footer>
        <right-panel></right-panel>
    </div>`
})

export class AppComponent {
}