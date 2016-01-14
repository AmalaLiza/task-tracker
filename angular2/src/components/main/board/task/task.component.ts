import {Component, Input} from "angular2/core";
import {TaskService} from "../../task.service.ts";

@Component({
    selector: 'task',
    styleUrls: ['./src/components/main/main-body.css'],
    template: `
        <input type="checkbox" class="fleft task-body-list__item__checkbox"/>
        <label class="task-body-list__item__label fleft">
            <span class="task-body-list__item__label__text">
                Create designs for insight screen
            </span>
        </label>

        <a href="javascript:void(0)" class="play-ico flaticon-play128 fright"></a>
        <span class="task-time-left fright">
            1:15:00
        </span>`
})

export class TaskComponent {
    @Input() task;
}