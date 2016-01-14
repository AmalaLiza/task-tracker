import {Component} from 'angular2/core';
import {BoardComponent} from './board/board.component.ts';
import {TaskService} from "./task.service.ts";
import * as Immtuable from "immutable";

@Component({
    selector: 'main',
    styleUrls: ['./src/components/main/main.css'],
    directives: [BoardComponent],
    template: `
         <div>
            <div class="task-list clearfix">
                <board *ngFor="#board of taskService.boards, #i=index"
                        [title]="board.get('title')"
                        [tasks]="board.get('tasks')"
                        [index]="i"
                        (toggleTask)="(toggleTask())">
                </board>

                <div class="task-list__item add-board fleft">
                    <a href="javascript:void(0)"
                        class="primary-link"
                        (click)="addBoard()">
                        + Add Board
                    </a>
                </div>

            </div>
    </div>`
})

export default class MainComponent {
    constructor(public taskService:TaskService) {
        console.log("MainComponent constructor");
    }


    addBoard(){
        this.taskService.addBoard();
    }

    toggleTask(){
        console.log("toggle");
    }

}