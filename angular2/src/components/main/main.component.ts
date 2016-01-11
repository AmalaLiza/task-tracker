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
         <div class="main-body width-container">
            <div class="task-list clearfix">
                <board *ngFor="#board of taskService.boards"
                        [tasks]="board.tasks"
                        (addTask)="(addTask(task, $index))">
                </board>

                <div class="task-list__item add-board fleft">
                    <a href="javascript:void(0)"
                        class="primary-link"
                        (click)="addBoard()">
                        + Add Board
                    </a>
                </div>

            </div>
        </div>
    </div>`
})

export default class MainComponent {
    constructor(public taskService:TaskService) {
    }

    addTask(task:string, boardIndex:number){
        //console.log("add task", task, boardIndex);
        this.taskService.addTask(0 ,'new task');
        console.log("new boards", this.taskService.boards.toJS());

    }

    addBoard(){
        console.log(this.taskService.boards.toJS())
    }
}